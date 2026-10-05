import { defineConfig } from 'vite-plus';

export default defineConfig({
  run: {
    tasks: {
      // Each command is cached separately, keeping each archive under the
      // server's 64 MiB blob limit.
      payload: ['node generate.mjs part-1', 'node generate.mjs part-2'],
    },
  },
});
