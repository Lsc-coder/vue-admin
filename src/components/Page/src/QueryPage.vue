<template>
	<div class="container-search">
		<QuerySearch v-model="searchParams" :items="searchConfig"></QuerySearch>
	</div>
	<div class="container-table">
		<BasicTable :data="tableData" :columns="tableColumns">
			<template #buttons>
				<el-button type="primary" @click="addRootMenu">新增</el-button>
			</template>
			<template #optionsButtons>
				<el-button type="primary" @click="addMenu">新增</el-button>
				<el-button type="primary" @click="editMenu">编辑</el-button>
				<el-button type="danger" @click="deleteMenu">删除</el-button>
			</template>
		</BasicTable>
	</div>
	<div class="query-table-pagination">
		<el-pagination
			v-model:current-page="currentPage"
			v-model:page-size="pageSize"
			:page-sizes="[100, 200, 300, 400]"
			:small="small"
			:disabled="disabled"
			:background="background"
			layout="total, sizes, prev, pager, next, jumper"
			:total="total"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
		/>
	</div>
</template>
<script lang="ts" setup>
	import { ref } from 'vue'
	import { QuerySearch } from '@/components/search'
	import { BasicTable } from '@/components/table'
	import { queryPageProps } from './QueryPage'
	const props = defineProps<queryPageProps>()
	const searchParams = ref({
		name: '',
	})
	const currentPage = ref(4)
	const pageSize = ref(100)
	const small = ref(false)
	const background = ref(false)
	const disabled = ref(false)
	const total = ref(0)

	const handleSizeChange = (val: number) => {
		console.log(`${val} items per page`)
	}
	const handleCurrentChange = (val: number) => {
		console.log(`current page: ${val}`)
	}

	const tableData = [
		{
			date: '2016-05-03',
			name: '首页',
			state: '有效',
			path: '/home',
			assemblyPath: '/home',
			id: 1,
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

	const addRootMenu = () => {
		console.log('新建根级菜单')
	}
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
<style lang="scss">
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
	.query-table-pagination {
		background-color: #fff;
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
</style>
