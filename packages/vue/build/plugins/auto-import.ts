import AutoImport from 'unplugin-auto-import/vite';
import type { HmtViteConfig } from '../../config/index';

export default (hmtViteConfig: HmtViteConfig) => {
  AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/ // .md
    ],
    imports: hmtViteConfig.autoImportImports as any[],
    // auto-import.d.ts生成的位置(默认是在根目录)
    dts: true
  });
};
