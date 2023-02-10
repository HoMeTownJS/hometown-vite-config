import type { HmtViteConfig } from '../../config/index';
export function createBuild(hmtViteConfig: HmtViteConfig) {
  const viteBuild = {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: hmtViteConfig.buildDropConsole,
        drop_debugger: hmtViteConfig.buildDropDebugger
      }
    }
  };
  return viteBuild;
}
