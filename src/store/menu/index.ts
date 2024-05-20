import { defineStore } from 'pinia'
import { menuType } from './type'
import { arrTotree } from '@/utils/tree'

export const useMenuStore = defineStore('menu', {
	state: () => ({ menuList: [], activeIndex: '/home', menuCollapse: false }),
	getters: {},
	actions: {
		setMenuList() {
			const menuList = [
				{
					id: 0,
					pid: 0,
					path: '/',
					name: '首页',
				},
				{
					id: 1,
					pid: 0,
					path: '/system',
					name: '系统管理',
				},
				{
					id: 2,
					pid: 1,
					path: '/menu',
					name: '菜单管理',
				},
			]
			this.menuList.push()
		},
		updateActiveIndex(payload: number) {
			this.activeIndex = payload
		},
		updateMenuCollapse() {
			this.menuCollapse = !this.menuCollapse
		},
	},
})
