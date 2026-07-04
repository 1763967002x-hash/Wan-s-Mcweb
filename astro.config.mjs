import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mc.jungles.cc.cd',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [
    sitemap({
      exclude: ['/404']
    })
  ]
});
