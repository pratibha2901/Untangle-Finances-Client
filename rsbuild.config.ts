import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import {pluginTailwindcss} from '@rsbuild/plugin-tailwindcss';
// Docs: https://rsbuild.rs/config/
export default defineConfig(({env})=>({
  resolve:{
    alias: {
    "@":'./src',
    "@components":'./src/components',
    "@routes":'./src/routes',
    "@customTypes":'./src/types'
  }},
  plugins: [pluginReact(),pluginTailwindcss()],
  server: {port: 3000, open: true },
  output: {
    distPath: {root: 'UntangleFinances'},
    minify: env === "production",
    sourceMap: env === "development"
  },
  source: {
    entry:
    {
      "index":"./src/index.tsx",
      "admin": "./src/admin.tsx"
    },
    define:{
      __APP__VERSION:"1.0.0"
    },
    assetsInclude: ["\/pdf$/"]
  }
 }));
