// env文件变量枚举，用户可以自定义使用到的变量名称
export const envVars = {
  VITE_BASE_URL: 'VITE_BASE_URL',
  VITE_HTTP_PROXY: 'VITE_HTTP_PROXY',
  VITE_HTTP_PROXY_PREFIX: 'VITE_HTTP_PROXY_PREFIX',
  VITE_HTTP_PROXY_URL: 'VITE_HTTP_PROXY_URL',
  VITE_APP_NAME: 'VITE_APP_NAME'
};
// 需要注入的plugins，用户可以自定义覆盖此选项
export const vitePlugins = ['legacy', 'vue', 'html'];
export const hometownViteConfigDefault = {
  vitePath: {
    root: '',
    src: ''
  },
  envVars,
  vitePlugins
};

export type HomeTownViteConfig = Partial<typeof hometownViteConfigDefault>;
