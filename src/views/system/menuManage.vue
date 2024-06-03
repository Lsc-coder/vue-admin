<template>
	<div>
		<QueryPage
			:search-config="searchConfig"
			:search-params="searchParams"
			:page="true"
			:table-data="tableData"
			:table-columns="tableColumns"
			:page-info="pageInfo"
			@search="search"
			@search-params="handleValueChange"
			@reset="reset"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
		/>
	</div>
</template>

<script setup lang="ts">
	import { ref, reactive } from 'vue'
	import { getMenu } from '@/api/meun'

	import { QueryPage } from '@/components/Page/index'
	import { itemArray } from '@/components/search/type'
	//搜索栏配置
	const searchConfig = ref<itemArray[]>([
		{ label: '名称', key: 'name', value: '', type: 'input' },
		{ label: '状态', key: 'state', value: '', type: 'input' },
	])
	const searchParams = ref<Record<string, any>>({
		name: '',
		state: '',
	})
	const search = () => {
		getMenu(searchParams.value).then((res) => {
			const data = res.data
		})
	}
	const handleValueChange = (data) => {
		searchParams.value = data
	}
	const reset = () => {
		searchParams.value = {
			name: '',
			state: '',
		}
	}

	//表格设置
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

	//分页设置
	const pageInfo = reactive<{
		currentPage: number
		pageSize: number
		total: number
	}>({
		currentPage: 1,
		pageSize: 100,
		total: 300,
	})
	const handleSizeChange = (val: number) => {
		console.log(`${val} items per page`)
	}
	const handleCurrentChange = (val: number) => {
		console.log(`current page: ${val}`)
	}
</script>

<style lang="scss" scoped></style>
