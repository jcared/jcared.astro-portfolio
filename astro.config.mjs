import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  buildOptions: {
    site: "https://jadencurley.me",
    sitemap: true,
  },
  integrations:[
    preact(),
  ],
});
