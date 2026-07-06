import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: '39. Bilimsel Kongre',
                short_name: 'Kongre 2026',
                description: 'Türk Nöroşirürji Derneği 39. Bilimsel Kongresi',
                theme_color: '#0f3460',
                background_color: '#1a1a2e',
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/.*\.(json)$/,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'api-cache',
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
                            },
                        },
                    },
                ],
            },
        }),
    ],
    server: {
        port: 3000,
        open: true
    }
});
