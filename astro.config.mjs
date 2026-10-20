// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import keystatic from '@keystatic/astro';

import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/admin': '/keystatic'
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [keystatic(), react(), markdoc()],
  adapter: vercel()
});