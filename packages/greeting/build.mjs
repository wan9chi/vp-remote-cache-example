import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { setTimeout } from 'node:timers/promises';

// Stands in for an expensive build step, so cache hits are easy to spot.
await setTimeout(3000);
const source = await readFile('src/index.js', 'utf8');
await mkdir('dist', { recursive: true });
await writeFile('dist/index.js', `// Built by @example/greeting\n${source}`);
