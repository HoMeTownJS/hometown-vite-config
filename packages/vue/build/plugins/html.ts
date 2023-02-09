// html插件（注入变量，压缩代码等）
import type { PluginOption } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default (appName: string): PluginOption[] => {
  return createHtmlPlugin({
    minify: true,
    inject: {
      data: {
        appName
      }
    }
  });
};
