// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ninjin-sirisiri.github.io',
  base: '/Notly-Web',
  integrations: [sitemap()]
});