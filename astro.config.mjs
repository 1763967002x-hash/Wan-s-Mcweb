import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mc.jungles.cc.cd',
  build:{
    format: 'file'
  },
  trailingSlash: 'never',
  integrations: [sitemap({exclude: ['/404']})]
});
