<template>
	<div class="specialist">
		<template v-for="(item, index) in exactData" :key="index">
			<div :class="{ wrapper: true, isExpand: index === expandIndex && item.isExpand }">
				<div class="wrapper-icon">
					<el-icon size="40">
						<component :is="item.icon" color="green"></component>
					</el-icon>
				</div>
				<div class="wrapper-title">
					{{ item.content }}
				</div>
				<div class="wrapper-expand" @click="toggleExpand(index)">
					<el-icon v-if="item.isExpand" size="40"><CaretBottom color="green" /></el-icon>
					<el-icon v-else size="40"><CaretTop color="green" /> </el-icon>
				</div>
			</div>
			<div
				v-if="index % 2 === 1"
				:class="`wrapper-main ${expandIndex % 2 === 0 ? 'wrapper-main-left' : 'wrapper-main-right'}`"
				:style="{
					display:
						(index === expandIndex && item.isExpand) || (index - 1 === expandIndex && exactData[index - 1].isExpand)
							? 'block'
							: 'none',
				}"
			>
				<div v-for="(content, index) in exactData[expandIndex].mainContent" :key="index" class="wrapper-main-content">
					<span>{{ content }}</span>
				</div>
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { ref, toRef, nextTick, onMounted } from 'vue'
	const props = defineProps({
		data: {
			type: Array<{ content: string; icon: string; mainContent: Array<any> }>,
			default: () => [
				{
					content: '第一个',
					icon: 'menu',
					mainContent: ['成人手术成人手术2成人手术2成人手术2成人手术2', '心脏手术', '杀手书也不是'],
				},
				{
					content: '第二个',
					icon: 'menu',
					mainContent: ['成人手术2', '心脏手术2', '杀手书也不是2'],
				},
				{
					content: '第一个',
					icon: 'menu',
					mainContent: ['成人手术', '心脏手术', '杀手书也不是', '成人手术', '心脏手术', '杀手书也不是'],
				},
				{
					content: '第二个',
					icon: 'menu',
					mainContent: ['成人手术2', '心脏手术2', '杀手书也不是2', '成人手术', '心脏手术', '杀手书也不是'],
				},
			],
		},
	})

	const exactData = toRef(props.data.map((item) => Object.assign(item, { isExpand: false })))

	const expandIndex = ref(0)

	const toggleExpand = (index: number) => {
		if (index === expandIndex.value) {
			exactData.value[index].isExpand = !exactData.value[index].isExpand
			return
		}
		exactData.value[expandIndex.value].isExpand = false
		nextTick(() => {
			expandIndex.value = index
			exactData.value[index].isExpand = !exactData.value[index].isExpand
		})
	}

	onMounted(() => {
		// toggleExpand(expandIndex.value);
	})
</script>

<style scoped lang="scss">
	.specialist {
		width: 800px;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		.el-col {
			padding: 10px !important;
		}
	}
	.isExpand {
		border-radius: 20px 20px 0px 0px !important;
		border-bottom: none !important;
	}
	.wrapper {
		border: 2px solid $theme;
		border-radius: 20px;
		margin: 20px;
		flex: 1px;
		display: flex;
		align-items: center;
		justify-content: center;
		&-icon {
			padding: 10px 20px;
		}
		&-title {
			padding: 20px 40px;
		}
		&-expand {
			padding: 10px 20px;
			cursor: pointer;
		}
		&-main {
			box-sizing: border-box;
			position: relative;
			// top: 0px;
			// left: 0px;
			width: 100%;
			margin: 20px;
			display: flex;
			justify-content: space-around;
			border: 2px solid $theme;
			border-top: none;
			&-content {
				display: inline-block;
				width: 33%;
				padding: 20px;
			}
		}
		&-main-left::before {
			content: '';
			position: absolute;
			left: -1.5px;
			top: -41px;
			width: calc(50% - 18.5px);
			height: 41px;
			border-left: 2px solid $theme;
			border-right: 2px solid $theme;
		}
		&-main-left::after {
			content: '';
			position: absolute;
			right: 0px;
			top: -32px;
			width: calc(50% + 21px);
			height: 33px;
			border-bottom: 2px solid $theme;
		}
		&-main-right::before {
			content: '';
			position: absolute;
			left: -2px;
			top: -32px;
			width: calc(50% + 23px);
			height: 33px;
			border-bottom: 2px solid $theme;
		}
		&-main-right::after {
			content: '';
			position: absolute;
			right: -1.5px;
			top: -41px;
			width: calc(50% - 18.5px);
			height: 42px;
			border-left: 2px solid $theme;
			border-right: 2px solid $theme;
		}
	}
</style>
