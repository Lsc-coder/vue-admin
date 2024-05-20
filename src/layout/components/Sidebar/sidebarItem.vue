<script setup lang="ts">
	interface Props {
		menu?: unknown
		basePath?: string
	}
	const props = defineProps<Props>()
	const isHasChild = (menu) => {
		return menu?.children?.length
	}
</script>
<template lang="">
	<el-sub-menu v-if="isHasChild(menu)" index="basePath">
		<template #title>
			<span>{{ menu.name }}</span>
		</template>
		<template v-if="menu?.children.length > 0">
			<SidebarItem v-for="(item, i) in menu.children" :key="i" :menu="item" :base-path="item.path" />
		</template>
	</el-sub-menu>
	<template v-else>
		<el-menu-item :index="basePath">
			<template #title>
				<span>{{ menu.name }}</span>
			</template>
		</el-menu-item>
	</template>
</template>

<style lang="scss"></style>
