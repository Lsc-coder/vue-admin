<template lang="">
	<div class="basic-table">
		<div v-if="title || slots.buttons" class="basic-table-top">
			<div class="basic-table-top-left">
				<div class="basic-table-top-left-title">{{ title }}</div>
			</div>
			<div class="basic-table-top-right">
				<slot name="buttons"> </slot>
			</div>
		</div>
		<div class="basic-table-main">
			<el-table :data="data" style="width: 100%">
				<!-- 传递slots -->
				<template v-for="item in Object.keys(slots)" #[item]="data" :key="item">
					<slot :name="item" v-bind="data || {}"></slot>
				</template>

				<template v-for="(item, index) in columns" :key="index">
					<el-table-column v-bind="item">
						<template v-for="item in Object.keys(slots)" #[item]="data" :key="item">
							<slot :name="item" v-bind="data || {}"></slot>
						</template>
						<template #default="scope">
							<span v-if="!item.type || item.type === 'text'" v-bind="item.attrs"> {{ scope.row[item.prop] }}</span>
							<el-tag v-else-if="item.type === 'tag'" v-bind="item.attrs"> {{ scope.row[item.prop] }}</el-tag>
							<span v-else-if="item.type === 'options'" v-bind="item.attrs">
								<slot name="optionsButtons" :data="item" />
							</span>
						</template>
					</el-table-column>
				</template>
			</el-table>
		</div>
	</div>
</template>
<script lang="ts" setup>
	import { useSlots } from 'vue'

	const props = defineProps({
		title: {
			type: String,
			default: '',
		},
		data: {
			type: Array,
			default: () => [],
		},
		columns: {
			type: Array,
			default: () => [],
		},
	})

	const slots = useSlots()
	console.log(slots)
</script>
<style lang="scss" scoped>
	.basic-table {
		background-color: #fff;

		&-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px 10px 10px 0px;
			border-bottom: 1px solid #e8e8e8;
			&-left {
				&-title {
					font-size: 16px;
					font-weight: 600;
					padding-left: 10px;
					border-left: 5px solid rgb(60, 141, 188);
				}
			}
		}
		&-main {
		}
	}
</style>
