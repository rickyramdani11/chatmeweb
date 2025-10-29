// 🎲 ChatMe Slots 3x4 — Versi Halus & Sinkron
const symbols = ['💎', '🍒', '7️⃣', '⭐', '🍋', '🔔', '💰', '🍀'];
const spinBtn = document.getElementById('spinBtn');
const resultEl = document.getElementById('result');
const reels = [
  document.getElementById('reel1'),
  document.getElementById('reel2'),
  document.getElementById('reel3')
];

const ROWS = 4;
const COLS = 3;
let spinning = false;

// 🧩 Buat hasil acak 4x3
function createGrid() {
  const grid = [];
  for (let r = 0; r < ROWS; r++) {
    const row = [];
    for (let c = 0; c < COLS; c++) {
      row.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    grid.push(row);
  }
  return grid;
}

// 🎨 Render simbol ke tiap reel
function renderGrid(grid) {
  for (let c = 0; c < COLS; c++) {
    const reel = reels[c];
    const reelInner = reel.querySelector('.reel-inner');
    reelInner.innerHTML = '';

    // Tambah banyak simbol untuk efek berputar panjang
    for (let i = 0; i < 30; i++) {
      const el = document.createElement('div');
      el.classList.add('symbol');
      el.textContent = symbols[i % symbols.length];
      reelInner.appendChild(el);
    }

    // Simbol hasil akhir di bawah
    grid.forEach(row => {
      const el = document.createElement('div');
      el.classList.add('symbol');
      el.textContent = row[c];
      reelInner.appendChild(el);
    });
  }
}

// 🎡 Spin halus untuk 1 reel
function spinReel(reel, stopAtIndex, duration) {
  const reelInner = reel.querySelector('.reel-inner');
  const symbolHeight = 75;
  const totalSymbols = reelInner.children.length;
  const totalHeight = totalSymbols * symbolHeight;

  let pos = 0;
  let speed = 25 + Math.random() * 10;
  const start = Date.now();

  return new Promise(resolve => {
    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = elapsed / duration;

      // bergerak ke bawah
      pos += speed;
      if (pos >= totalHeight) pos = 0;
      reelInner.style.transform = `translateY(-${pos}px)`;

      // slowdown lembut
      if (progress < 1) {
        speed *= 0.985;
        requestAnimationFrame(animate);
      } else {
        // berhenti tepat di posisi simbol
        const exactStop = stopAtIndex * symbolHeight;
        reelInner.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
        reelInner.style.transform = `translateY(-${exactStop}px)`;
        setTimeout(() => {
          reelInner.style.transition = '';
          resolve();
        }, 700);
      }
    };
    requestAnimationFrame(animate);
  });
}

// 💥 Deteksi kemenangan (horizontal, diagonal, bentuk bebas ≥3)
function findClusters(grid) {
  const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
  const clusters = [];
  const dirs = [
    [1, 0], [-1, 0],
    [0, 1], [0, -1],
    [1, 1], [-1, -1],
    [1, -1], [-1, 1]
  ];

  function dfs(r, c, symbol, cluster) {
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || visited[r][c] || grid[r][c] !== symbol) return;
    visited[r][c] = true;
    cluster.push([r, c]);
    for (const [dr, dc] of dirs) dfs(r + dr, c + dc, symbol, cluster);
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (!visited[r][c]) {
        const cluster = [];
        dfs(r, c, grid[r][c], cluster);
        if (cluster.length >= 3) clusters.push(cluster);
      }
    }
  }
  return clusters.filter(cl => new Set(cl.map(([_, c]) => c)).size >= 2);
}

// 🕹️ Tombol Spin
spinBtn.addEventListener('click', async () => {
  if (spinning) return;
  spinning = true;
  resultEl.textContent = '';
  spinBtn.disabled = true;

  // Hasil grid & render simbol
  const grid = createGrid();
  renderGrid(grid);

  // Tentukan posisi berhenti tiap kolom
  const stopIndexes = Array.from({ length: COLS }, () => Math.floor(Math.random() * 10 + 20));

  // Semua reel mulai berputar bersamaan
  const spins = reels.map((reel, i) => spinReel(reel, stopIndexes[i], 2000 + i * 300));
  await Promise.all(spins);

  // Cek kemenangan
  const clusters = findClusters(grid);
  if (clusters.length > 0) {
    let win = 0;
    clusters.forEach(c => win += c.length * 100);
    resultEl.innerHTML = `🎉 Menang ${win} koin! 🎰`;
    resultEl.style.color = '#00ff88';

    // Highlight simbol menang
    clusters.flat().forEach(([r, c]) => {
      const el = reels[c].querySelectorAll('.symbol')[r + 30];
      if (el) el.classList.add('win');
    });
  } else {
    resultEl.textContent = '😢 Coba lagi!';
    resultEl.style.color = '#ff8080';
  }

  spinBtn.disabled = false;
  spinning = false;
});