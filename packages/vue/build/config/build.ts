import type { HmtViteConfig } from '../../config/index';
export function createBuild(hmtViteConfig: HmtViteConfig) {
  const viteBuild = {
    assetsDir: './static',
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    cssCodeSplit: true,
    terserOptions: {
      compress: {
        drop_console: hmtViteConfig.buildDropConsole,
        drop_debugger: hmtViteConfig.buildDropDebugger
      },
      output: {
        // 去掉注释内容
        comments: hmtViteConfig.buildDropComments
      }
    },
    rollupOptions: {
      output: {
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: 'js/[name].[hash].js',
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: 'js/[name].[hash].js',
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: '[ext]/[name].[hash].[ext]',
        manualChunks: hmtViteConfig.buildManualChunks
      }
    }
  };
  return viteBuild;
}
