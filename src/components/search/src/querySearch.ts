export interface itemArray {
	value: string
	key: string
	type: string
	placeholder?: string
	label?: string
	searchItem?: Array<any>
	options?: Array<any>
}
export interface querySearchProps {
	labelWidth: Number
	layout: Object
	searchItem: Array<itemArray>
	isCanShink?: Boolean
	modelValue: {}
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
	searchItem: {
		type: Array<itemArray>,
		default: [],
	},
	isCanShink: {
		type: Boolean,
		default: true,
	},
	searchParams: {
		type: Object,
		default: {},
	},
}
