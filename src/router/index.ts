import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/layout/index.vue'

const routes = [
	{
		path: '/',
		component: Layout,
		redirect: '/home',
		name: '首页',
		children: [{ path: 'home', component: () => import('@/views/Home.vue') }],
		meta: { title: '首页' },
	},
	{
		path: '/system',
		component: Layout,
		children: [
			{ path: '/menu', component: () => import('@/views/system/menuManage.vue') },
			{ path: '/permission', component: () => import('@/views/system/permissionManage.vue') },
			{ path: '/user', component: () => import('@/views/system/userManage.vue') },
		],
	},
	{
		path: '/login',
		component: () => import('@/views/login/login.vue'),
		meta: { title: '登录' },
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
export default router
