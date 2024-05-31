<template>
	<div>
		<QueryPage :search-config="searchConfig" />
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { QueryPage } from '@/components/Page/index'
	import { itemArray } from '@/components/search/type'
	//搜索栏配置
	const searchConfig = ref<itemArray[]>([{ label: '名称', key: 'name', value: '', type: 'input' }])
</script>

<style lang="scss" scoped></style>
