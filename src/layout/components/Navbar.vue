<template lang="">
	<div class="navbar">
		<div class="navbar-left" @click="toggleSideBar">
			<el-icon size="30"><Menu /></el-icon>
		</div>
		<div class="navbar-main">
			<div class="navbar-main-logo">后台管理系统</div>
			<div class="navbar-main-subNav">后台管理系统</div>
		</div>
		<div class="navbar-right">右边</div>
	</div>
</template>
<script setup lang="ts">
	const toggleSideBar = () => {
		console.log('toggleSideBar')
	}
</script>
<style lang="scss" scoped>
	.navbar {
		width: 100%;
		background-color: rgb(60, 141, 188);
		align-items: center;
		display: flex;
		color: #fff;
		&-left {
			cursor: pointer;
			width: 100px;
			text-align: center;
			display: flex;
			align-items: center;
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
