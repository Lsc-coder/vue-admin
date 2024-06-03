<template>
	<div class="container-search">
		<QuerySearch :search-params="searchParams" :search-item="searchConfig" v-bind="attrs"></QuerySearch>
	</div>
	<div class="container-table">
		<BasicTable :data="tableData" :columns="tableColumns">
			<template #buttons>
				<el-button type="primary" @click="addRootMenu">新增</el-button>
			</template>
			<template #action>
				<el-button type="primary" @click="addMenu">新增</el-button>
				<el-button type="primary" @click="editMenu">编辑</el-button>
				<el-button type="danger" @click="deleteMenu">删除</el-button>
			</template>
		</BasicTable>
	</div>
	<div class="query-table-pagination">
		<el-pagination
			v-if="page"
			v-model:page-size="pageInfo.pageSize"
			v-model:current-page="pageInfo.currentPage"
			:page-sizes="[100, 200, 300, 400]"
			layout="total, sizes, prev, pager, next, jumper"
			:total="pageInfo.total"
			v-bind="attrs"
		/>
	</div>
</template>
<script lang="ts" setup>
	import { ref, useAttrs, useSlots } from 'vue'
	import { QuerySearch } from '@/components/search'
	import { BasicTable } from '@/components/table'
	import { queryPageProps } from './QueryPage'

	defineOptions({
		name: 'QueryPage',
		inheritAttrs: false,
	})

	const props = defineProps<queryPageProps>()

	const emit = defineEmits([''])

	const attrs = useAttrs()
	const slots = useSlots()

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
