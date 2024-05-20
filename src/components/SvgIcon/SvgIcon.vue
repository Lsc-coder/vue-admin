<template>
	<svg aria-hidden="true" class="svg-icon" :style="`width:${size}px;height:${size}px;`">
		<use :xlink:href="symbolId" :fill="color" v-bind="attrs" />
	</svg>
</template>

<script>
	import { defineComponent, computed } from 'vue'
	import { useAttrs } from 'vue'

	export default defineComponent({
		name: 'SvgIcon',
		props: {
			prefix: {
				type: String,
				default: 'icon',
			},
			name: {
				type: String,
				required: true,
			},
			color: {
				type: String,
				default: '#333',
			},
			size: {
				type: String,
				default: '20',
			},
		},
		setup(props) {
			const symbolId = computed(() => `#${props.prefix}-${props.name}`)
			const attrs = useAttrs()
			return { symbolId, attrs }
		},
	})
</script>
<style lang="scss" scpoed>
	.svg-icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
</style>
