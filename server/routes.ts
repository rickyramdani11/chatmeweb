import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure multer for APK uploads
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const apkStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `app-${uniqueSuffix}.apk`);
  }
});

const upload = multer({
  storage: apkStorage,
  fileFilter: (req, file, cb) => {
    if (file.originalname.endsWith('.apk')) {
      cb(null, true);
    } else {
      cb(new Error('Only APK files are allowed'));
    }
  },
  limits: {
    fileSize: 100 * 1024 * 1024 // 100MB limit
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // APK upload endpoint
  app.post('/api/upload-apk', upload.single('apk'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    res.json({
      message: 'APK uploaded successfully',
      filename: req.file.filename,
      size: req.file.size,
      path: `/uploads/${req.file.filename}`
    });
  });

  // Get list of uploaded APK files
  app.get('/api/apk-files', (req, res) => {
    try {
      if (!fs.existsSync(uploadDir)) {
        return res.json({ files: [] });
      }

      const files = fs.readdirSync(uploadDir)
        .filter(file => file.endsWith('.apk'))
        .map(filename => {
          const filePath = path.join(uploadDir, filename);
          const stats = fs.statSync(filePath);
          return {
            filename,
            size: stats.size,
            uploadDate: stats.mtime.toISOString()
          };
        })
        .sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());

      res.json({ files });
    } catch (error) {
      res.status(500).json({ message: 'Failed to read files' });
    }
  });

  // Serve uploaded files
  app.use('/uploads', (req, res, next) => {
    res.setHeader('Content-Type', 'application/vnd.android.package-archive');
    res.setHeader('Content-Disposition', `attachment; filename="${path.basename(req.path)}"`);
    next();
  }, (req, res, next) => {
    const filePath = path.join(uploadDir, path.basename(req.path));
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).json({ message: 'File not found' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
