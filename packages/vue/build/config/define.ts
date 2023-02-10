import dayjs from 'dayjs';

/** 项目构建时间 */
const PROJECT_BUILD_TIME = JSON.stringify(dayjs().format('YYYY-MM-DD HH:mm:ss'));

export function createDefine() {
  const viteDefine = {
    // 解决生产环境打包会报的错误
    __INTLIFY_PROD_DEVTOOLS__: false,
    PROJECT_BUILD_TIME
  };
  return viteDefine;
}
