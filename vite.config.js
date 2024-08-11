import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import autoprefixer from "autoprefixer";
import postCssPxToRem from "postcss-pxtorem";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { // Configure aliases
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    postcss:{
      plugins:[
        //自动补充前缀
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
          ],
        }),
        //单位转化
        postCssPxToRem({
          // rootValue: 37.5, // 75表示750设计稿，37.5表示375设计稿
          //@ts-expect-error 这里不做类型检测
          rootValue({ file }) {
            // 项目中使用的 antd官方社区的 antd-mobile 组件库。这里做了区分，如果样式文件命中有 antd-mobile 则以 375 样稿转化。这里不做区分，那么 antd-mobile 各组件样式会变形。
            return file.indexOf('antd-mobile') !== -1?37.5:75
          },
          propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: ["norem"], // 过滤掉norem-开头的class，不进行rem转换
        }),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})
