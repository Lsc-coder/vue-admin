<template>
	<div :class="{ 'container-search-search': true, expose: isExpose }">
		<el-row class="row-bg" justify="start" :gutter="20">
			<el-form ref="form" class="form_flex" :inline="true" :label-width="`${labelWidth}px`">
				<el-col v-for="(item, index) in searchItem" v-bind="layout" :key="index">
					<el-form-item :label="item.label">
						<!-- <component :is="`el-${item.type}`" /> -->
						<el-input
							v-if="!item.type || item.type === 'input' || item.type === 'password'"
							:model-value="searchParams[item.key]"
							:placeholder="item.placeholder || '请输入'"
							@update:model-value="handleValueChange($event, item.key)"
						/>
						<el-select
							v-else-if="item.type === 'select'"
							:model-value="searchParams[item.key]"
							:placeholder="item.placeholder || '请选择'"
							@update:model-value="handleValueChange($event, item.key)"
						>
							<el-option v-for="(option, i) of item.options" :key="i" v-bind="option" />
						</el-select>
						<el-date-picker
							v-else-if="item.type === 'date'"
							v-model="searchParams[item.key]"
							:placeholder="item.placeholder || '请输入'"
							@update:model-value="handleValueChange($event, item.key)"
						/>
						<el-date-picker
							v-else-if="item.type === 'datePicker'"
							v-model="searchParams[item.key]"
							type="datetimerange"
							:placeholder="item.placeholder || '请输入'"
							@update:model-value="handleValueChange($event, item.key)"
						/>
						<el-select-v2
							v-else-if="item.type === 'mulSelect'"
							v-model="searchParams[item.key]"
							:options="item.options"
							:placeholder="item.placeholder || '请输入'"
							multiple
							@update:model-value="handleValueChange($event, item.key)"
						/>
						<el-cascader
							v-else-if="item.type === 'cascader'"
							:model-value="searchParams[item.key]"
							:options="item.options"
							:placeholder="item.placeholder || '请选择'"
							@update:model-value="handleValueChange($event, item.key)"
						/>
					</el-form-item>
				</el-col>
			</el-form>
		</el-row>
	</div>
	<div>
		<div class="container-search-button">
			<div>
				<slot name="prefix-button" />
				<template v-if="isNeed">
					<el-button v-if="isExpose" @click="toggleExpose">
						展开
						<el-icon class="el-icon--right">
							<ArrowDownBold size="20" />
						</el-icon>
					</el-button>
					<el-button v-else @click="toggleExpose">
						收起
						<el-icon class="el-icon--right">
							<ArrowUpBold size="20" />
						</el-icon>
					</el-button>
				</template>
				<slot name="cneter-button" />
				<el-button type="primary" @click="handleSearch">搜索</el-button>
				<el-button @click="handleReset">重置</el-button>
				<slot name="suffix-button" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { searchProps } from './querySearch'
	import { ref, nextTick, onMounted, useAttrs } from 'vue'

	defineOptions({
		name: 'QuerySearch',
		inheritAttrs: false,
	})

	const props = defineProps(searchProps)

	const emit = defineEmits(['searchParams', 'change', 'search', 'reset', 'changeExpose'])

	//是否展开搜索栏
	const defaultHeight = 52
	const isNeed = ref(false)
	const isExpose = ref(false)
	onMounted(() => {
		nextTick(() => {
			isNeed.value = document.getElementsByClassName('container-search-search')[0].clientHeight !== defaultHeight
		})
	})
	const toggleExpose = () => {
		isExpose.value = !isExpose.value
	}

	const handleValueChange = (value: any, field: string) => {
		emit('searchParams', { ...props.searchParams, [field]: value })
	}
	const handleSearch = () => {
		emit('search')
	}
	const handleReset = () => {
		emit('reset', props)
	}
	const handleChange = (value: any, field: string) => {
		emit('change', props)
	}
</script>
<style lang="scss" scoped>
	.expose {
		height: 52px;
		overflow: hidden;
	}
	.container-search {
		background-color: #fff;
		margin-bottom: 20px;
		// padding: 10px;
		&-search {
			flex: 1;
			display: flex;
			justify-content: space-between;

			.el-row {
				width: 100%;
			}

			.el-col {
				padding: 10px 10px;
				.el-form-item {
					width: 100%;
					margin: 0px;
					\depp\ .el-form-item__content {
						width: 100%;
						.el-date-editor.el-input {
							width: 100% !important;
						}
					}
				}
				.el-input {
					width: 100% !important;
					height: 100%;
				}
				.el-cascader {
					width: 100%;
				}
			}

			.form_flex {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
			}
		}
		&-button {
			display: flex;
			padding: 20px;
			justify-content: flex-end;
		}
	}
</style>
