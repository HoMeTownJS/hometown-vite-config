export const hmtViteConfigDefault = {
  // env
  envVarsVITE_BASE_URL: 'VITE_BASE_URL',
  envVarsVITE_HTTP_PORT: 'VITE_HTTP_PORT',
  envVarsVITE_HTTP_HOST: 'VITE_HTTP_HOST',
  envVarsVITE_HTTP_PROXY: 'VITE_HTTP_PROXY',
  envVarsVITE_HTTP_PROXY_PREFIX: 'VITE_HTTP_PROXY_PREFIX',
  envVarsVITE_HTTP_PROXY_URL: 'VITE_HTTP_PROXY_URL',
  envVarsVITE_APP_NAME: 'VITE_APP_NAME',
  envVarsVITE_VISUALIZER: 'VITE_VISUALIZER',

  // alias
  vitePathRoot: '',
  vitePathSrc: '',
  vitePathImages: 'src/assets/images',
  viteAliasCustom: {},

  // plugins
  vitePluginsDefaults: ['legacy', 'vue', 'html', 'visualizer'],
  vitePluginsCustom: [],
  unpluginResolvers: [''],

  // build
  buildGenerateGz: true,
  buildDropConsole: true,
  buildDropDebugger: true,
  buildDropComments: true
};

export type HmtViteConfig = typeof hmtViteConfigDefault;

export type UserHmtViteConfig = Partial<typeof hmtViteConfigDefault>;
