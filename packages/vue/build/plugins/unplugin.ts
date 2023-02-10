import Components from 'unplugin-vue-components/vite';
import type { HmtViteConfig } from '../../config/index';
import {
  VantResolver,
  NaiveUiResolver,
  ElementPlusResolver,
  AntDesignVueResolver
} from 'unplugin-vue-components/resolvers';

export default (hmtViteConfig: HmtViteConfig) => {
  const resolvers = [];
  if (hmtViteConfig.unpluginResolvers.includes('Vant')) resolvers.push(VantResolver());
  if (hmtViteConfig.unpluginResolvers.includes('NaiveUi')) resolvers.push(NaiveUiResolver());
  if (hmtViteConfig.unpluginResolvers.includes('ElementPlus')) resolvers.push(ElementPlusResolver());
  if (hmtViteConfig.unpluginResolvers.includes('AntDesign')) resolvers.push(AntDesignVueResolver());
  return Components({
    resolvers
  });
};
