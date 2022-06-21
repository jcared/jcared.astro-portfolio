import preact from '@astrojs/preact';
export default {
  buildOptions: {
    site: "https://jadencurley.me",
    sitemap: true,
  },
  integrations:[
    preact(),
  ],
};
