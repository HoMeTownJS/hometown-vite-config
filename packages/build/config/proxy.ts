// 设置代理

import type { ProxyOptions } from 'vite';

/**
 * 设置网络代理
 * @param viteEnv - vite环境描述
 */
export function createViteProxy(isOpenProxy = false, proxyPrefix = '/api', proxyUrl = '') {
  if (!isOpenProxy || !proxyPrefix || !proxyUrl) return undefined;

  const proxy: Record<string, string | ProxyOptions> = {
    [proxyPrefix]: {
      target: proxyUrl,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${proxyPrefix}`), '')
    }
  };

  return proxy;
}
