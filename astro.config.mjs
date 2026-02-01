// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://magical-baklava-7b7b85.netlify.app/",
  integrations: [preact()]
});