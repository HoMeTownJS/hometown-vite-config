import type { ConfigEnv } from 'vite';
import vue from './vue';
import legacy from './legacy';
import html from './html';
import visualizer from './visualizer';
import unplugin from './unplugin';

import type { HmtViteConfig } from '../../config/index';

/**
 *	vite插件
 * @param configEnv - 环境
 * @param srcPath - src路径
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(
  { command }: ConfigEnv,
  viteEnv: Record<string, string>,
  hmtViteConfig: HmtViteConfig
) {
  const plugins = [];

  if (hmtViteConfig.vitePluginsDefaults.includes('vue')) plugins.push(vue);
  if (hmtViteConfig.vitePluginsDefaults.includes('legacy')) plugins.push(legacy);
  if (hmtViteConfig.vitePluginsDefaults.includes('html')) {
    plugins.push(html(viteEnv[hmtViteConfig.envVarsVITE_APP_NAME]));
  }

  if (
    hmtViteConfig.vitePluginsDefaults.includes('visualizer') &&
    command === 'build' &&
    viteEnv[hmtViteConfig.envVarsVITE_VISUALIZER] === 'true'
  ) {
    plugins.push(visualizer);
  }

  if (hmtViteConfig.unpluginResolvers.length > 0) {
    plugins.push(unplugin(hmtViteConfig));
  }

  if (hmtViteConfig.vitePluginsCustom.length > 0) {
    return [...plugins, ...hmtViteConfig.vitePluginsCustom];
  }
  return plugins;
}
