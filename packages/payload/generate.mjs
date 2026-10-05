import { randomBytes } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';

// Random bytes don't compress, so the cache archive is as large as the file.
await mkdir('dist', { recursive: true });
await writeFile(`dist/${process.argv[2]}.bin`, randomBytes(50 * 1024 * 1024));
