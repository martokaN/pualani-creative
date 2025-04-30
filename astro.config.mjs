import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  envPrefix: ['INSTAGRAM_', 'HONEYBOOK_'],
});