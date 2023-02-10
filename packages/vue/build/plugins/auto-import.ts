import AutoImport from 'unplugin-auto-import/vite';

export default () => {
  AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/ // .md
    ],
    imports: ['vue', 'vue-router'],
    // auto-import.d.ts生成的位置(默认是在根目录)
    dts: true
  });
};
