export const hmtViteConfigDefault = {
  envVarsVITE_BASE_URL: 'VITE_BASE_URL',
  envVarsVITE_HTTP_PROXY: 'VITE_HTTP_PROXY',
  envVarsVITE_HTTP_PROXY_PREFIX: 'VITE_HTTP_PROXY_PREFIX',
  envVarsVITE_HTTP_PROXY_URL: 'VITE_HTTP_PROXY_URL',
  envVarsVITE_APP_NAME: 'VITE_APP_NAME',
  envVarsVITE_VISUALIZER: 'VITE_VISUALIZER',

  vitePathRoot: '',
  vitePathSrc: '',
  vitePluginsDefaults: ['legacy', 'vue', 'html'],
  vitePluginsCustom: []
};

export type HmtViteConfig = typeof hmtViteConfigDefault;

export type UserHmtViteConfig = Partial<typeof hmtViteConfigDefault>;
