import { defineConfig } from 'vite-plus';

export default defineConfig({
  run: {
    cache: {
      remote: {
        url: 'https://vp-remote-cache.wan9chi.workers.dev/projects/example',
      },
    },
  },
});
