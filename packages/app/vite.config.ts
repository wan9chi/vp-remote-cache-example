import { defineConfig } from 'vite-plus';

export default defineConfig({
  run: {
    tasks: {
      build: {
        command: 'node build.mjs',
        dependsOn: [{ task: 'build', from: 'dependencies' }],
      },
    },
  },
});
