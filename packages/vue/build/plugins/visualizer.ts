// 构建的依赖大小占比分析插件
import { visualizer } from 'rollup-plugin-visualizer';

export default visualizer({
  gzipSize: true,
  open: true,
  brotliSize: true
});
