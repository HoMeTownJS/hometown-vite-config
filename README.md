<p align="center">
  <img width="220px" src="https://github.com/HoMeTownJS/site/blob/main/public/images/logo-vertical.png?raw=true" />
</p>
<p align="center"><b>β¨ hometown-vite-config π₯</b></p>
<p align="center">HoMeTownJS's vite config presets. Out of the box. π¦</p>

### Packagesπ¦

- π΅ [@hometownjs/vite-config-vue](https://github.com/HoMeTownJS/hometown-vite-config/tree/main/packages/vue)

### Feature π

- Probably the simplest vite config plug-in.
- It can let you focus on business or fast development.
- Out of the box.

### Usage π€©

#### Install

First u need install the packages of vite.

```bash
pnpm install vite
```

Then just choose which package.

```bash
pnpm install @hometownjs/vite-config-vue #vue
```

#### Config

Create `vite.config.ts` in the root directory and enter the following

```ts
import { createViteConfig } from '@hometownjs/vite-config-vue';
export default createViteConfig();
```

Congratulations on completing the configuration of `vite.config.ts` π π π

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

### About other config

Of course, do you want to ask whether you can customize the configuration or the benefits of using this library?

ok! lets go~

Please move to the library [@hometownjs/vite-config-vue](https://github.com/HoMeTownJS/hometown-vite-config/tree/main/packages/vue) view detail.

## Author

[HoMeTown](https://juejin.cn/user/4116184668057390) π
