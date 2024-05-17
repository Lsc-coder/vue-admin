import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 引入path模块
import { viteMockServe } from 'vite-plugin-mock'
// svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

//自动导入element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

//引入unocss
import UnoCSS from 'unocss/vite'

import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		viteMockServe({
			mockPath: './mock/',
		}),
		eslintPlugin(),
		AutoImport({
			imports: ['vue'],
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
		UnoCSS(),
		createSvgIconsPlugin({
			// 指定需要缓存的图标文件夹
			iconDirs: [path.resolve(process.cwd(), 'src/icons')],
			// 指定symbolId格式
			symbolId: 'icon-[dir]-[name]',
			customDomId: '__svg__icons__dom__',
		}),
	],
	resolve: {
		alias: {
			'@': '/src',
			vue: 'vue/dist/vue.esm-bundler.js',
		},
	},
	css: {
		/* CSS 预处理器 */
		preprocessorOptions: {
			scss: {
				//引用全局的scss
				additionalData: `@import "./src/Style/index.scss";`,
			},
		},
	},
})
