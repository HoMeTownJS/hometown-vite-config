import { defineConfig } from 'tsup';
import metaUrlPlugin from '@chialab/esbuild-plugin-meta-url';

export default defineConfig({
  entry: ['./index.ts'],
  splitting: false,
  sourcemap: false,
  target: 'esnext',
  plugins: [metaUrlPlugin()],
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  esbuildOptions: (options, { format }) => {
    // 处理 esbuild 打包后的 import.meta.url 报错的情况
    if (format === 'cjs') {
      if (!options.banner) options.banner = {};
      options.banner.js = `const _importMetaUrl = require('url').pathToFileURL(__filename);`;
    }
    options.define = {
      'import.meta.url': '_importMetaUrl'
    };
  }
});
