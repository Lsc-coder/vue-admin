<template>
	<SwiperCard />
	<div class="flex h-400 justify-around p-b20 p-t20">
		<div id="left" class="flex-2 bg-#fff mr-20 p-20"></div>

		<div id="right" class="flex-1 bg-#fff p-20"></div>
	</div>
</template>
<script setup lang="ts">
	import { onMounted } from 'vue'
	import SwiperCard from '@/components/card/SwiperCard.vue'
	import * as echarts from 'echarts'
	const option = {
		title: {
			text: '时段分布',
		},
		legend: {
			data: ['访客量', '成交量'],
			left: 100,
			itemStyle: { borderType: 'solid', borderCap: 'square' },
		},
		tooltip: {
			trigger: 'axis',
		},
		xAxis: {
			type: 'category',
			data: [
				'01:00',
				'03:00',
				'05:00',
				'07:00',
				'09:00',
				'11:00',
				'13:00',
				'15:00',
				'17:00',
				'19:00',
				'21:00',
				'23:00',
			],
		},
		yAxis: {
			type: 'value',
		},
		series: [
			{
				data: [0, 150, 300, 600, 450, 750, 1290, 750, 1320, 4500, 3000, 1200],
				type: 'line',
				name: '访客量',
				stack: 'Total',
				smooth: true,
			},
			{
				data: [0, 150, 300, 450, 600, 750, 1290, 1330, 1320, 1700, 2300, 4500],
				type: 'line',
				name: '成交量',
				stack: 'Total',
				color: '#F3D024',
				smooth: true,
			},
		],
	}
	const option2 = {
		title: {
			text: '实付金额',
		},
		tooltip: {
			trigger: 'axis',
		},
		xAxis: {
			type: 'category',
			data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
		},
		yAxis: {
			type: 'value',
		},
		series: [
			{
				data: [0, 150, 300, 600, 450, 750, 1290, 750],
				type: 'bar',
				name: '访客量',
				stack: 'Total',
				color: '#2BC17B',
				width: '10px',
				smooth: true,
			},
		],
	}

	onMounted(() => {
		const chartDom = document.getElementById('left')
		const myChart = echarts.init(chartDom).setOption(option)
		const chartDom2 = document.getElementById('right')
		const myChart2 = echarts.init(chartDom2).setOption(option2)
	})
</script>
<style lang="scss" scoped></style>
