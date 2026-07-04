import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://minecraft-server.example.com',
  integrations: [
    sitemap({
      exclude: ['/404']
    })
  ]
});
