<template>
	<!-- <el-statistic v-for="(item, index) in dataList" :key="index" :value="item.value">
		<template #suffix>{{ item.diff || diff }}</template>
		<template #prefix>{{ item.prefix }}</template>
	    </el-statistic> -->
	<div class="flex justify-between h200">
		<div v-for="(item, index) in dataList" :key="index" :class="`flex justify-between items-center bg-${index}`">
			<div calss="p-20">
				<SvgIcon :name="item.icon" size="50" />
			</div>
			<div class="flex-1 color-#fff">
				<el-statistic :value="item.value">
					<template #suffix>{{ item.diff || diff }}</template>
					<template #prefix>{{ item.prefix }}</template>
				</el-statistic>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref } from 'vue'

	import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
	const diff = '+1.2%同昨天对比'
	const dataList = ref([
		{
			prefix: '今日订单收入',
			value: 6666.88,
			color: '#70E8C9',
			icon: 'home-income',
		},
		{
			prefix: '今日订单数量',
			value: 6666.88,
			icon: 'home-order',
		},
		{
			prefix: '今日访客数',
			value: 6666.88,
			icon: 'home-visitor',
		},
		{
			prefix: '支付转化率',
			value: 6666.88,
			icon: 'home-conrate',
		},
	])
</script>
<style lang="scss" scoped>
	.bg-0 {
		background: linear-gradient(130.24deg, rgba(112, 232, 201, 1) 0%, rgba(57, 206, 199, 1) 100%);
	}
	.bg-1 {
		background: linear-gradient(130.24deg, rgba(208, 103, 203, 1) 0%, rgba(217, 102, 211, 1) 100%);
	}
	.bg-2 {
		background: linear-gradient(130.24deg, rgba(255, 174, 96, 1) 0%, rgba(251, 146, 79, 1) 100%);
	}
	.bg-3 {
		background: linear-gradient(130.24deg, rgba(254, 136, 108, 1) 0%, rgba(253, 83, 88, 1) 100%);
	}
</style>
