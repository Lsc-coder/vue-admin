import { itemArray } from '@/components/search/type'

interface pageInfo {
	currentPage: number
	pageSize: number
	total: number
}

export interface queryPageProps {
	searchConfig: itemArray[]
	searchParams: Record<string, any>
	page: boolean
	pageInfo: pageInfo
	tableData: any[]
	tableColumns: any[]
}
