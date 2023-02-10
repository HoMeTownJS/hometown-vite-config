import { loadEnv } from 'vite';
import type { UserConfigExport, ConfigEnv, UserConfig } from 'vite';
import { createServer, createDefine, createBuild, createAlias, setupVitePlugins } from './build';
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
        alias: createAlias(hmtViteConfig)
      },
      server: createServer(viteEnv, hmtViteConfig),
      plugins: setupVitePlugins({ command, mode }, viteEnv, hmtViteConfig),
      define: createDefine(),
      build: createBuild(hmtViteConfig)
    };

    return Object.assign(viteConfig, userViteConfig);
  };
}
