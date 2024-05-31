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
			{ path: '/menu', component: () => import('@/views/system/menuManage.vue'), meta: { title: '菜单管理' } },
			{
				path: '/permission',
				component: () => import('@/views/system/permissionManage.vue'),
				meta: { title: '权限管理' },
			},
			{ path: '/user', component: () => import('@/views/system/userManage.vue'), meta: { title: '用户管理' } },
		],
	},
	{
		path: '/login',
		component: () => import('@/views/login/login.vue'),
		meta: { title: '登录页面' },
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
export default router
