# vp-remote-cache-example

A small pnpm monorepo for trying the Vite+ remote cache end to end:

- Server: the self-hosted cache from [voidzero-dev/vite-task#718](https://github.com/voidzero-dev/vite-task/pull/718), deployed as a Cloudflare Worker.
- Client: the `vite-plus` preview build from [voidzero-dev/vite-plus#2842](https://github.com/voidzero-dev/vite-plus/pull/2842), installed from the registry bridge configured in `.npmrc`.

The endpoint is set in [`vite.config.ts`](vite.config.ts):

```text
https://vp-remote-cache.wan9chi.workers.dev/projects/example
```

## Packages

`@example/app` imports `@example/greeting` at build time, so its `build` task depends on the greeting build. Each build waits three seconds to stand in for real work, which makes cache hits easy to spot.

## CI

| Job       | Runs on                     | Remote cache                                     |
| --------- | --------------------------- | ------------------------------------------------ |
| `publish` | Pushes to `main`            | `read-write`, authenticated with GitHub OIDC     |
| `replay`  | After `publish`             | `read` on a fresh runner; every task should hit  |
| `build`   | Pull requests, manual runs  | `read`                                           |

The server accepts uploads only from `push` jobs on `main` in this repository, with an OIDC token whose audience is the endpoint. Pull request and manual runs can read but not upload.

## Local use

Reads need no credentials:

```sh
pnpm install
pnpm exec vp run -r build
```

After `main` has been built in CI, a fresh clone should replay both builds from the remote cache.
