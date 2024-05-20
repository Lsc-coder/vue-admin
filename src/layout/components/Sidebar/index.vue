<template>
	<div>
		<div class="p-20 bg-[#202741] w-199.2 color-#A9ABB3">Logo</div>
		<el-menu
			active-text-color="#fff"
			background-color="#202741"
			class="el-menu-vertical-demo"
			:default-active="defaultActive"
			text-color="#A9ABB3"
			router
		>
			<SidebarItem v-for="(item, i) in menuList" :key="i" :menu="item" :base-path="item.path" />
		</el-menu>
	</div>
</template>
<script setup lang="ts">
	import { onMounted, ref } from 'vue'
	import SidebarItem from './sidebarItem.vue'
	import { getMenu } from '@/api/meun'
	const defaultActive = '/home'
	const menuList = ref([])
	onMounted(() => {
		getMenu().then((res) => {
			menuList.value = res.data
		})
	})
</script>
<style lang="scss"></style>
