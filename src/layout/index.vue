<template>
	<div class="common-layout">
		<el-container>
			<el-header><Navbar /></el-header>
			<el-container>
				<el-aside width="200px"> <Sidebar /> </el-aside>
				<el-main> <AppMain /> </el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script setup>
	import Navbar from './components/Navbar.vue'
	import AppMain from './components/AppMain.vue'
	import Sidebar from './components/Sidebar/index.vue'
</script>
<style lang="scss" scoped>
	.common-layout {
		height: 100vh;
		.el-header {
			background-color: rgb(60, 141, 188);
			padding: 0px;
			display: flex;
			align-items: center;
		}
		.el-container.is-vertical {
			height: 100%;
		}
		.el-aside {
			background-color: #fff;
		}
		.el-main {
			background-color: #f7f7f9;
		}
	}
</style>
