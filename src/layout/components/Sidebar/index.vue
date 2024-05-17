<template lang="">
	<div>
		<el-menu
			active-text-color="#ffd04b"
			background-color="#545c64"
			class="el-menu-vertical-demo"
			:default-active="defaultActive"
			text-color="#fff"
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
