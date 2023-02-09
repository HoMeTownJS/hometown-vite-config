import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./index.ts'],
  splitting: false,
  sourcemap: false,
  clean: false,
  dts: true,
  format: ['esm', 'cjs']
});
