type itemArray = {
	label: string
	type: string
	value: string
	placeholder: object
	items: Array<any>
	key: string
	options: Array<any>
}
export const searchProps = {
	labelWidth: {
		type: Number,
		default: 100,
	},
	layout: {
		type: Object,
		default: {
			xl: 5,
			lg: 8,
			md: 12,
			sm: 24,
			xs: 24,
		},
	},
	items: {
		type: Array<itemArray>,
		default: [],
	},
	isCanShink: {
		type: Boolean,
		default: true,
	},
	modelValue: <any>{},
}
