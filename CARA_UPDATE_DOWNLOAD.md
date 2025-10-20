# Cara Update URL Download APK di cPanel

## PENTING: Update SETELAH Build & Upload!

Sistem ini dirancang agar Anda bisa mengubah URL download APK **SETELAH** website sudah di-build dan di-upload ke cPanel, tanpa perlu build ulang!

---

## Langkah-langkah:

### 1. Build website untuk production
```bash
npm run build
```
Ini akan menghasilkan folder `dist` yang siap diupload ke cPanel.

### 2. Upload folder `dist` ke cPanel
- Login ke cPanel Anda
- Buka File Manager
- Upload semua file dari folder `dist` ke `public_html`
- Website Anda sekarang sudah online!

### 3. Upload file APK ke cPanel
- Tetap di File Manager cPanel
- Upload file APK (misalnya: `ChatMe.apk`) ke folder `public_html`
- Atau buat folder khusus: `public_html/downloads/` dan upload di sana
- Catat URL file APK, contoh:
  - `https://yourdomain.com/ChatMe.apk`
  - `https://yourdomain.com/downloads/ChatMe.apk`

### 4. Edit file `config.json` di cPanel (KUNCI PENTING!)
- Di File Manager cPanel, buka file: `public_html/config.json`
- Klik kanan → Edit
- Update URL sesuai lokasi file APK Anda:

**SEBELUM:**
```json
{
  "apkUrl": "",
  "playStoreUrl": "https://play.google.com/store/apps/details?id=com.chatme1.app"
}
```

**SESUDAH:**
```json
{
  "apkUrl": "https://yourdomain.com/ChatMe.apk",
  "playStoreUrl": "https://play.google.com/store/apps/details?id=com.chatme1.app"
}
```

- Save file
- **SELESAI!** Button download otomatis terupdate tanpa perlu build ulang!

---

## Cara Kerja Button Download:

### Ketika `apkUrl` KOSONG (default):
- Button "Download Sekarang" → mengarah ke Play Store
- Button "Download" di navigation → mengarah ke Play Store

### Ketika `apkUrl` SUDAH DIISI:
- Button "Download Sekarang" → download langsung file APK dari cPanel
- Button "Download" di navigation → download langsung file APK dari cPanel
- Button "Download di Play Store" → tetap mengarah ke Play Store (tidak berubah)

---

## Lokasi Button Download:
1. **Hero Section** - Button "Download Sekarang" (button utama di halaman awal)
2. **Navigation Bar** - Button "Download" (desktop & mobile menu)
3. **CTA Section** - Button "Download di Play Store" (tetap ke Play Store)

---

## Contoh URL cPanel yang valid:
- `https://chatme.com/ChatMe.apk`
- `https://chatme.com/downloads/ChatMe.apk`
- `https://chatme.com/apk/ChatMe-v1.0.apk`
- `https://www.chatme.com/files/ChatMe-latest.apk`

---

## Troubleshooting:

**❓ Button download masih ke Play Store padahal sudah edit config.json?**
- Pastikan file `config.json` ada di root folder `public_html` (bukan di subfolder)
- Clear cache browser (Ctrl+Shift+R atau Cmd+Shift+R)
- Cek apakah URL file APK benar dan bisa diakses

**❓ File config.json tidak ada di cPanel?**
- File ini otomatis ter-copy saat build dari folder `client/public/config.json`
- Jika hilang, buat manual file `config.json` di `public_html` dengan format JSON di atas

**❓ Mau ganti file APK yang lebih baru?**
- Upload file APK baru ke cPanel (bisa pakai nama yang sama atau berbeda)
- Edit `config.json` dan update URL-nya
- Selesai! Tidak perlu build ulang website

---

**✅ KEUNTUNGAN SISTEM INI:**
- Bisa update URL download kapan saja tanpa build ulang
- Cukup edit 1 file JSON di cPanel
- Perubahan langsung terlihat di website
- Mudah maintenance dan update APK versi baru
