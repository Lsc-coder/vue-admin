<template lang="">
	<div class="bread-crumb">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item v-for="(item, index) in breadcrumbData">
				<span v-if="index === breadcrumbData.length - 1 || index === 0" class="no-redirect">{{
					item.name || item.meta.title
				}}</span>
				<!-- 可以点击项 -->
				<a v-else class="redirect" @click.prevent="onLinkClick(item)">{{ item.name || item.meta.title }}</a>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>
<script setup lang="ts">
	import { ref, watch } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	const route = useRoute()
	const router = useRouter()
	// 生成数组数据
	const breadcrumbData = ref([])
	const getBreadcrumbData = () => {
		breadcrumbData.value = route.matched.filter((item) => {
			return item.name
		})
	}
	// 监听路由发生改变时触发
	watch(
		route,
		() => {
			getBreadcrumbData()
		},
		{
			immediate: true,
		},
	)
	// 处理点击事件
	const onLinkClick = (item) => {
		router.push(item.path)
	}
</script>
<style lang="scss">
	.bread-crumb {
		background-color: #fff;
		padding: 10px;
		margin-bottom: 10px;
	}
</style>
