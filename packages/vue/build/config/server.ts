import type { HmtViteConfig } from '../../config/index';
import { createViteProxy } from './proxy';
export function createServer(viteEnv: Record<string, string>, hmtViteConfig: HmtViteConfig) {
  const viteServer = {
    port: parseInt(viteEnv.VITE_HTTP_PORT ?? 8080, 10),
    host: viteEnv.VITE_HTTP_HOST ?? '0.0.0.0',
    open: true,
    proxy: createViteProxy(
      viteEnv[hmtViteConfig.envVarsVITE_HTTP_PROXY] === 'true',
      viteEnv[hmtViteConfig.envVarsVITE_HTTP_PROXY_PREFIX],
      viteEnv[hmtViteConfig.envVarsVITE_HTTP_PROXY_URL]
    )
  };
  return viteServer;
}
