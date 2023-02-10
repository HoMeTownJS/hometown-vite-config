import { loadEnv } from 'vite';
import type { UserConfigExport, ConfigEnv, UserConfig } from 'vite';
import { createViteProxy, viteDefine, createBuild, setupVitePlugins } from './build';
import { hmtViteConfigDefault, type UserHmtViteConfig } from './config';

export function createViteConfig(userHmtViteConfig: UserHmtViteConfig, userViteConfig: UserConfig = {}) {
  const hmtViteConfig = Object.assign(hmtViteConfigDefault, userHmtViteConfig);

  return ({ command, mode }: ConfigEnv): UserConfigExport => {
    const root: string = process.cwd();

    const viteEnv = loadEnv(mode, root);

    const viteConfig = {
      // 配置项
      base: viteEnv[hmtViteConfig.envVarsVITE_BASE_URL],
      resolve: {
        alias: {
          '~': hmtViteConfig.vitePathRoot,
          '@': hmtViteConfig.vitePathSrc
        }
      },
      server: {
        port: parseInt(viteEnv.VITE_PORT ?? 8080, 10),
        host: '0.0.0.0',
        open: true,
        proxy: createViteProxy(
          viteEnv[hmtViteConfig.envVarsVITE_HTTP_PROXY] === 'true',
          viteEnv[hmtViteConfig.envVarsVITE_HTTP_PROXY_PREFIX],
          viteEnv[hmtViteConfig.envVarsVITE_HTTP_PROXY_URL]
        )
      },
      plugins: setupVitePlugins({ command, mode }, viteEnv, hmtViteConfig),
      define: viteDefine,
      build: createBuild(hmtViteConfig)
    };

    return Object.assign(viteConfig, userViteConfig);
  };
}
