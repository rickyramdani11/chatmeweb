# Cara Update URL Download APK

## Langkah-langkah:

### 1. Upload file APK ke cPanel
- Login ke cPanel Anda
- Buka File Manager
- Upload file APK (misalnya: `ChatMe.apk`) ke folder `public_html` atau folder lain yang bisa diakses publik
- Catat URL file APK yang sudah diupload, contoh:
  - `https://yourdomain.com/ChatMe.apk`
  - `https://yourdomain.com/downloads/ChatMe.apk`

### 2. Update URL di aplikasi
- Buka file: `client/src/config/download.ts`
- Update nilai `apkUrl` dengan URL file APK dari cPanel:

```typescript
export const downloadConfig = {
  apkUrl: "https://yourdomain.com/ChatMe.apk",  // ← Update URL ini
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.chatme1.app"
};
```

### 3. Button Download akan otomatis terupdate
Setelah update URL di `download.ts`, button download akan otomatis berfungsi:

**Ketika `apkUrl` kosong:**
- Button "Download Sekarang" → mengarah ke Play Store
- Button "Download" di navigation → mengarah ke Play Store

**Ketika `apkUrl` sudah diisi:**
- Button "Download Sekarang" → download langsung file APK dari cPanel
- Button "Download" di navigation → download langsung file APK dari cPanel
- Button "Download di Play Store" → tetap mengarah ke Play Store (tidak berubah)

### 4. Lokasi Button Download:
1. **Hero Section** - Button "Download Sekarang" (button utama di halaman awal)
2. **Navigation Bar** - Button "Download" (desktop & mobile menu)
3. **CTA Section** - Button "Download di Play Store" & "Download di App Store" (tetap mengarah ke store)

## Contoh URL cPanel yang valid:
- `https://chatme.com/ChatMe.apk`
- `https://chatme.com/downloads/ChatMe.apk`
- `https://chatme.com/apk/ChatMe-v1.0.apk`

**Pastikan file APK bisa diakses publik dan URL-nya benar!**
