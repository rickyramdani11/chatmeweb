import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // ✅ fix untuk ES Module
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// ✅ Node.js ESM tidak punya __dirname otomatis
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
  origin: '*', // ⚠️ Ganti dengan domain frontend kamu nanti
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 🟢 Serve folder /client/games biar bisa diakses publik
app.use('/games', express.static(path.join(__dirname, '../client/games')));
// Contoh URL: https://your-domain.com/games/slot/

// 🧩 Middleware logging untuk API
app.use((req, res, next) => {
  const start = Date.now();
  const pathReq = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (pathReq.startsWith("/api")) {
      let logLine = `${req.method} ${pathReq} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // 🛑 Error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // ===============================
    // 🟩 Tambahkan route child-safety di sini
    // ===============================
    const distPath = path.join(__dirname, "../dist/public");

    // Layani semua file statis hasil build
    app.use(express.static(distPath));

    // Route manual untuk child-safety.html
    app.get("/child-safety", (_req, res) => {
      res.sendFile(path.join(distPath, "child-safety.html"));
    });

    // Optional: fallback ke index.html untuk SPA
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    // ===============================

    serveStatic(app);
  }

  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`✅ Server running on port ${port}`);
      log(`🎰 Slot game available at /games/slot/`);
      log(`🟢 Child Safety page at /child-safety`);
    }
  );
})();