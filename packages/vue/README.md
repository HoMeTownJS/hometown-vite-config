<p align="center">
  <img width="220px" src="https://github.com/HoMeTownJS/site/blob/main/public/images/logo-vertical.png?raw=true" />
</p>
<p align="center"><b>✨ @hometownjs/vite-config-vue 💥</b></p>
<p align="center">HoMeTownJS's vite config presets for vue. Out of the box. 📦</p>

### Feature 🚁

- Probably the simplest vite config plug-in.
- It can let you focus on business or fast development.
- Built-in basic plug-ins and support custom plug-ins.
- Out of the box.

### Usage 🤩

#### Install

First u need install the packages of vite.

```bash
pnpm install vite
```

Then just choose which package.

```bash
pnpm install @hometownjs/vite-config-vue #vue
```

#### vite.config.ts

Create `vite.config.ts` in the root directory and enter the following.

```ts
import { createViteConfig } from '@hometownjs/vite-config-vue';
const hometownViteConfig = {}
const viteConfig = {}
export default createViteConfig(hometownViteConfig, viteConfig);
```

The `createViteConfig` function has two parameters, one is library, the other is vite native, and the latter will overwrite the former, using the Object.assign operation.

Congratulations on completing the configuration of `vite.config.ts` 🎉 🎉 🎉

Next, add the script in `package.json`:

```json
{
  "dev": "vite --mode=development",
  "build": "vite build --mode=production",
}
```

do it:

```bash
# start dev serve
pnpm dev

# build production package
pnpm build
```

### config vars

#### env-fields

`@Homeownjs/vite-config-vue` allows you to write some configurations directly in the env file. At the same time, it also supports customized keys.

##### VITE_BASE_URL

like webpack publicPath

##### VITE_HTTP_PORT

vite server port

##### VITE_HTTP_HOST

vite sever host

##### VITE_HTTP_PROXY

usage http proxy ?

##### VITE_HTTP_PROXY_PREFIX

http proxy perfix will effect when VITE_HTTP_PROXY is true.

##### VITE_HTTP_PROXY_URL

http proxy url will effect when VITE_HTTP_PROXY is true.

##### VITE_APP_NAME

app name.

##### VITE_VISUALIZER

usage build visualizer ?

customized keys:

```ts
import { createViteConfig } from '@hometownjs/vite-config-vue';
const hometownViteConfig = {
  // like webpack publicPath
  envVarsVITE_BASE_URL: 'VITE_BASE_URL',
  // vite server port
  envVarsVITE_HTTP_PORT: 'VITE_HTTP_PORT',
  // vite sever host
  envVarsVITE_HTTP_HOST: 'VITE_HTTP_HOST',
  // usage http proxy ?
  envVarsVITE_HTTP_PROXY: 'VITE_HTTP_PROXY',
  // http proxy perfix will effect when VITE_HTTP_PROXY is true.
  envVarsVITE_HTTP_PROXY_PREFIX: 'VITE_HTTP_PROXY_PREFIX',
  // http proxy url will effect when VITE_HTTP_PROXY is true.
  envVarsVITE_HTTP_PROXY_URL: 'VITE_HTTP_PROXY_URL',
  // app name
  envVarsVITE_APP_NAME: 'VITE_APP_NAME',
  // usage visualizer ?
  envVarsVITE_VISUALIZER: 'VITE_VISUALIZER',
}
const viteConfig = {}
export default createViteConfig(hometownViteConfig, viteConfig);
```

env files config: e.g. `.env.production`

```text
# app name
VITE_APP_NAME = 'hometown-h5-template'

# same as webpack publicPath
VITE_BASE_URL = '/'

# usage hash or history route ?
VITE_HASH_ROUTE = 'false'

# usage http proxy ?
VITE_HTTP_PROXY= 'false'

# http proxy url will effect when VITE_HTTP_PROXY is true.
VITE_HTTP_PROXY_URL = ''

# http proxy perfix will effect when VITE_HTTP_PROXY is true.
VITE_HTTP_PROXY_PREFIX = ''


# usage visualizer ?
VITE_VISUALIZER = 'true'
```

#### other-fields

default:

```ts
const hmtViteConfigDefault = {
  // alias, u can config this at here, also at viteConfig too.
  // same as { '~': vitePathRoot.value }
  vitePathRoot: '',
  // same as { '@': vitePathSrc.value }
  vitePathSrc: '',
  // custom some alias
  viteAliasCustom: {},

  // plugins, @Some basic plug-ins are built in homeownjs/vite-config-vue, which are basically enough.
  //  Of course, if you need to, you can add new plug-ins on this basis
  vitePluginsDefaults: ['legacy', 'vue', 'html', 'visualizer'],
  vitePluginsCustom: [],
  unpluginResolvers: [''],

  // build
  buildGenerateGz: true,
  buildDropConsole: true,
  buildDropDebugger: true,
  buildDropComments: true
};
```

## Author

[HoMeTown](https://juejin.cn/user/4116184668057390) 🙊
