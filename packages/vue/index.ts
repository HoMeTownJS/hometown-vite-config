import { loadEnv } from 'vite';
import type { UserConfigExport, ConfigEnv, UserConfig } from 'vite';
import { resolvePath, createViteProxy, viteDefine, setupVitePlugins } from './build';
import { hometownViteConfigDefault, type HomeTownViteConfig } from './config';

export function createViteConfig(userHometownViteConfig: HomeTownViteConfig = {}, userViteConfig: UserConfig = {}) {
  const hometownViteConfig = Object.assign(hometownViteConfigDefault, userHometownViteConfig);

  return ({ command, mode }: ConfigEnv): UserConfigExport => {
    const root: string = process.cwd();

    const viteEnv = loadEnv(mode, root);

    const vitePath = resolvePath('./', import.meta.url);

    const viteConfig = {
      // 配置项
      base: viteEnv[hometownViteConfig.envVars.VITE_BASE_URL],
      resolve: {
        alias: {
          '~': vitePath.root,
          '@': vitePath.src
        }
      },
      server: {
        port: parseInt(viteEnv.VITE_PORT ?? 8080, 10),
        host: '0.0.0.0',
        open: true,
        proxy: createViteProxy(
          viteEnv[hometownViteConfig.envVars.VITE_HTTP_PROXY] === 'true',
          viteEnv[hometownViteConfig.envVars.VITE_HTTP_PROXY_PREFIX],
          viteEnv[hometownViteConfig.envVars.VITE_HTTP_PROXY_URL]
        )
      },
      plugins: setupVitePlugins({ command, mode }, viteEnv, hometownViteConfig),
      define: viteDefine
    };

    return Object.assign(viteConfig, userViteConfig);
  };
}
