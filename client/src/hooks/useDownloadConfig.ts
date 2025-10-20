import { useState, useEffect } from 'react';

interface DownloadConfig {
  apkUrl: string;
  playStoreUrl: string;
}

export function useDownloadConfig() {
  const [config, setConfig] = useState<DownloadConfig>({
    apkUrl: '',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.chatme1.app'
  });

  useEffect(() => {
    fetch('/config.json')
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(err => {
        console.error('Failed to load config:', err);
      });
  }, []);

  return config;
}
