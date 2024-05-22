// uno.config.ts
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
	presets: [
		presetUno(), // 默认样式预设, 此预设继承了 @unocss/preset-wind 和 @unocss/preset-mini
		presetAttributify(), // 为其他预设和规则提供归因模式。 标签class类名可写为属性
		presetRemToPx({
			// 将 rem 转为 px ， 1rem = n px
			baseFontSize: 4, // 默认为 16
		}),
		presetIcons({
			collections: {
				ep: () => import('@iconify-json/ep/icons.json').then((i) => i.default),
				custom: FileSystemIconLoader('./src/assets/', (svg) => svg.replace(/#FFF/, 'currentColor')),
			},
			warn: true,
		}),
	],
	rules: [
		['direction-column', { display: 'flex', 'flex-direction': 'column' }],
		['flex-2', { flex: '2 1 0%' }],
	],
})
