<template lang="">
	<div class="container-search">
		<QuerySearch v-model="searchParams" :items="searchConfig"></QuerySearch>
	</div>
	<div class="container-table">
		<BasicTable :data="tableData" :title="'表格标题'" :columns="tableColumns">
			<template #buttons>
				<el-button type="primary" @click="addMenu">新增</el-button>
			</template>
			<template #optionsButtons>
				<el-button type="primary" text="primary" @click="addMenu">新增</el-button>
				<el-button type="primary" text="primary" @click="editMenu">编辑</el-button>
				<el-button type="danger" text="danger" @click="deleteMenu">删除</el-button>
			</template>
		</BasicTable>
		<QueryPage> </QueryPage>
	</div>
</template>
<script setup lang="ts">
	import { ref } from 'vue'
	import { QuerySearch } from '@/components/search'
	import { BasicTable } from '@/components/table'
	import QueryPage from '@/components/Page/index.vue'

	const searchParams = ref({
		name: '',
		select: '',
		date: '',
		datePicker: '',
		mulSelect: [],
		cascader: [],
	})
	const options = [
		{
			value: 'Option1',
			label: 'Option1',
		},
		{
			value: 'Option2',
			label: 'Option2',
		},
		{
			value: 'Option3',
			label: 'Option3',
		},
		{
			value: 'Option4',
			label: 'Option4',
		},
	]
	const cascaderOptions = [
		{
			value: 'guide',
			label: 'Guide',
			children: [
				{
					value: 'disciplines',
					label: 'Disciplines',
					children: [
						{
							value: 'consistency',
							label: 'Consistency',
						},
						{
							value: 'feedback',
							label: 'Feedback',
						},
						{
							value: 'efficiency',
							label: 'Efficiency',
						},
						{
							value: 'controllability',
							label: 'Controllability',
						},
					],
				},
				{
					value: 'navigation',
					label: 'Navigation',
					children: [
						{
							value: 'side nav',
							label: 'Side Navigation',
						},
						{
							value: 'top nav',
							label: 'Top Navigation',
						},
					],
				},
			],
		},
		{
			value: 'component',
			label: 'Component',
			children: [
				{
					value: 'basic',
					label: 'Basic',
					children: [
						{
							value: 'layout',
							label: 'Layout',
						},
						{
							value: 'color',
							label: 'Color',
						},
						{
							value: 'typography',
							label: 'Typography',
						},
						{
							value: 'icon',
							label: 'Icon',
						},
						{
							value: 'button',
							label: 'Button',
						},
					],
				},
				{
					value: 'form',
					label: 'Form',
					children: [
						{
							value: 'radio',
							label: 'Radio',
						},
						{
							value: 'checkbox',
							label: 'Checkbox',
						},
						{
							value: 'input',
							label: 'Input',
						},
						{
							value: 'input-number',
							label: 'InputNumber',
						},
						{
							value: 'select',
							label: 'Select',
						},
						{
							value: 'cascader',
							label: 'Cascader',
						},
						{
							value: 'switch',
							label: 'Switch',
						},
						{
							value: 'slider',
							label: 'Slider',
						},
						{
							value: 'time-picker',
							label: 'TimePicker',
						},
						{
							value: 'date-picker',
							label: 'DatePicker',
						},
						{
							value: 'datetime-picker',
							label: 'DateTimePicker',
						},
						{
							value: 'upload',
							label: 'Upload',
						},
						{
							value: 'rate',
							label: 'Rate',
						},
						{
							value: 'form',
							label: 'Form',
						},
					],
				},
				{
					value: 'data',
					label: 'Data',
					children: [
						{
							value: 'table',
							label: 'Table',
						},
						{
							value: 'tag',
							label: 'Tag',
						},
						{
							value: 'progress',
							label: 'Progress',
						},
						{
							value: 'tree',
							label: 'Tree',
						},
						{
							value: 'pagination',
							label: 'Pagination',
						},
						{
							value: 'badge',
							label: 'Badge',
						},
					],
				},
				{
					value: 'notice',
					label: 'Notice',
					children: [
						{
							value: 'alert',
							label: 'Alert',
						},
						{
							value: 'loading',
							label: 'Loading',
						},
						{
							value: 'message',
							label: 'Message',
						},
						{
							value: 'message-box',
							label: 'MessageBox',
						},
						{
							value: 'notification',
							label: 'Notification',
						},
					],
				},
				{
					value: 'navigation',
					label: 'Navigation',
					children: [
						{
							value: 'menu',
							label: 'Menu',
						},
						{
							value: 'tabs',
							label: 'Tabs',
						},
						{
							value: 'breadcrumb',
							label: 'Breadcrumb',
						},
						{
							value: 'dropdown',
							label: 'Dropdown',
						},
						{
							value: 'steps',
							label: 'Steps',
						},
					],
				},
				{
					value: 'others',
					label: 'Others',
					children: [
						{
							value: 'dialog',
							label: 'Dialog',
						},
						{
							value: 'tooltip',
							label: 'Tooltip',
						},
						{
							value: 'popover',
							label: 'Popover',
						},
						{
							value: 'card',
							label: 'Card',
						},
						{
							value: 'carousel',
							label: 'Carousel',
						},
						{
							value: 'collapse',
							label: 'Collapse',
						},
					],
				},
			],
		},
		{
			value: 'resource',
			label: 'Resource',
			children: [
				{
					value: 'axure',
					label: 'Axure Components',
				},
				{
					value: 'sketch',
					label: 'Sketch Templates',
				},
				{
					value: 'docs',
					label: 'Design Documentation',
				},
			],
		},
	]
	const searchConfig = ref([
		{ label: '名称', key: 'name' },
		// { label: '选择框', key: 'select', type: 'select', options },
		// { label: '虚拟化选择器', key: 'mulSelect', type: 'mulSelect', options },
		// { label: '日期选择器', key: 'date', type: 'date' },
		// { label: '日期选择器', key: 'datePicker', type: 'datePicker' },
		// {
		// 	label: '级联选择器',
		// 	key: 'cascader',
		// 	type: 'cascader',
		// 	options: cascaderOptions,
		// },
	])

	const tableData = [
		{
			date: '2016-05-03',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-02',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-04',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-01',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
	]
	const tableColumns = [
		{ prop: 'icon', label: '菜单图标', width: '180' },
		{ prop: 'name', label: '菜单名称', width: '180' },
		{ prop: 'state', label: '菜单状态', type: 'tag' },
		{ prop: 'path', label: '菜单路径' },
		{ prop: 'assemblyPath', label: '组件路径' },
		{ prop: 'options', label: '操作', type: 'options' },
	]

	const addMenu = () => {
		console.log('新建菜单')
	}
	const editMenu = () => {
		console.log('编辑菜单')
	}
	const deleteMenu = () => {
		console.log('删除菜单')
	}
</script>
<style lang="scss" scoped>
	.container-search {
		background-color: #fff;
		margin-bottom: 20px;

		&-left {
			flex: 1;
			display: flex;
			justify-content: space-between;

			.el-row {
				width: 100%;
			}

			.el-col {
				padding: 10px 10px;

				.el-input {
					height: 100%;
				}
			}

			.form_flex {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
			}
		}

		&-shink {
			padding: 10px 10px;
		}

		&-right {
			padding: 10px 10px;
		}
	}
</style>
