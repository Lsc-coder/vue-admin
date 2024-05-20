<template>
	<div class="flex justify-between w-100%">
		<div class="flex justify-center items-center p-l20 cursor-pointer" @click="toggleSideBar">
			<el-icon size="50" color="#A9ABB3" class="hover:bg-gray-100 p-10"><Menu /></el-icon>
			<BreadCrumb></BreadCrumb>
		</div>
		<!-- <div class="navbar-main">
			<div class="navbar-main-logo">后台管理系统</div>
			<div class="navbar-main-subNav">后台管理系统</div>
		</div> -->
		<div class="flex justify-center items-center m-r20">
			<div class="p-10 cursor-pointer hover:bg-gray-100">
				<el-icon color=""><QuestionFilled /></el-icon>
			</div>
			<div class="p-10 cursor-pointer hover:bg-gray-100">
				<el-badge :value="99">
					<el-icon><Bell /></el-icon>
				</el-badge>
			</div>
			<div class="p-10 flex items-center cursor-pointer hover:bg-gray-100">
				<div class="p-r10 p-l10">
					<el-avatar :size="30" src="https://empty" @error="errorHandler">
						<img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
					</el-avatar>
				</div>
				<div>
					<el-dropdown>
						<span class="el-dropdown-link">
							Dropdown List
							<el-icon class="el-icon--right">
								<arrow-down />
							</el-icon>
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>个人中心</el-dropdown-item>
								<el-dropdown-item>修改头像</el-dropdown-item>
								<el-dropdown-item divided>退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
			</div>
			<div class="p-10 flex items-center cursor-pointer hover:bg-gray-100">
				<el-icon><SwitchButton /></el-icon>
				<span class="ml-10">退出</span>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import BreadCrumb from './Breadcrumb/index.vue'
	import { useMenuStore } from '@/store'
	const menuStore = useMenuStore()
	const errorHandler = () => true
	const toggleSideBar = () => {
		menuStore.updateMenuCollapse()
	}
</script>
<style lang="scss" scoped>
	.navbar {
		width: 100%;
		align-items: center;
		display: flex;
		&-left {
			cursor: pointer;
			text-align: center;
			padding: 0px 15px;
		}
		&-main {
			flex: 1;
			display: flex;
			align-items: center;
			&-logo {
				font-size: 32px;
				font-weight: bold;
				display: flex;
				align-items: center;
				margin-right: 20px;
			}
		}
		&-right {
			width: 320px;
			display: flex;
			align-items: center;
		}
	}
</style>
