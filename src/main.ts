import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import router from './router'
import './permission'

import 'virtual:uno.css'
import '@unocss/reset/normalize.css'

import 'default-passive-events'

// Register icon sprite
import 'virtual:svg-icons-register'

//国际化配置
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const pinia = createPinia()
const app = createApp(App)

//注册Icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

app.use(router).use(pinia).use(ElementPlus, {
	locale: zhCn,
})

app.mount('#app')
