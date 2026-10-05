import { mkdir, writeFile } from 'node:fs/promises';
import { setTimeout } from 'node:timers/promises';
import { greet } from '@example/greeting';

// Stands in for an expensive build step, so cache hits are easy to spot.
await setTimeout(3000);
await mkdir('dist', { recursive: true });
await writeFile('dist/index.html', `<!doctype html>\n<h1>${greet('remote cache')}</h1>\n`);
