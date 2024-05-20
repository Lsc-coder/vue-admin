<template>
	<div class="flex justify-between h200">
		<div v-for="(item, index) in dataList" :key="index" :class="`flex justify-between items-center bg-${index}`">
			<div class="pl-40">
				<SvgIcon :name="item.icon" size="50" />
			</div>
			<div class="flex-1 color-#fff font-16 p-40 direction-column">
				<div class="pb-10">
					{{ item.prefix }}
				</div>

				<div>
					<el-statistic :value="item.value" value-style="color:#fff" :formatter="item.formatter" />
				</div>

				<div class="pt-10">
					{{ item.diff || diff }}
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, computed, reactive } from 'vue'
	import { useTransition } from '@vueuse/core'

	import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

	const diff = '+1.2%同昨天对比'
	let dataList = ref([])
	dataList.value = [
		{
			prefix: '今日订单收入',
			value: 6666.88,
			color: '#70E8C9',
			icon: 'home-income',
		},
		{
			prefix: '今日订单数量',
			value: 259,
			icon: 'home-order',
		},
		{
			prefix: '今日访客数',
			value: 259,
			icon: 'home-visitor',
		},
		{
			prefix: '支付转化率',
			value: 10,
			icon: 'home-conrate',
			formatter: (value) => {
				return `${value}%`
			},
		},
	]
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
	.el-statistic {
		font-size: 16px;
		.el-statistic__content {
			color: #fff;
		}
	}
</style>
