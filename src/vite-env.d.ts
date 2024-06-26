/// <reference types="vite/client" />
/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_NODE_ENV: string
	readonly VITE_BASE_URL: string
	readonly VITE_PORT: number
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
}
declare module 'vite-plugin-eslint' {
	const vitePluginEslint: any
	export default vitePluginEslint
}
