import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	// Enable Preact to support Preact JSX components.
  site: "https://jadencurley.me",
	integrations: [preact(),sitemap()],
});
