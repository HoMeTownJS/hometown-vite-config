import type { HmtViteConfig } from '../../config/index';
export function createAlias(hmtViteConfig: HmtViteConfig) {
  const viteAlias = {
    '~': hmtViteConfig.vitePathRoot,
    '@': hmtViteConfig.vitePathSrc
  };
  return Object.assign(viteAlias, hmtViteConfig.viteAliasCustom);
}
