import type { ConfigEnv, PluginOption } from 'vite';
import vue from './vue';
import legacy from './legacy';
import html from './html';
import { type HomeTownViteConfig, hometownViteConfigDefault } from '../../config';

/**
 *	vite插件
 * @param configEnv - 环境
 * @param srcPath - src路径
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(
  { command, mode }: ConfigEnv,
  viteEnv: Record<string, string>,
  { envVars, vitePlugins }: HomeTownViteConfig
): (PluginOption | PluginOption[])[] {
  console.log(command, mode);
  const plugins = [];

  if (vitePlugins?.includes('vue')) plugins.push(vue);
  if (vitePlugins?.includes('legacy')) plugins.push(legacy);
  if (vitePlugins?.includes('html')) {
    plugins.push(html(viteEnv[envVars ? envVars.VITE_APP_NAME : hometownViteConfigDefault.envVars.VITE_APP_NAME]));
  }

  return plugins;
}
