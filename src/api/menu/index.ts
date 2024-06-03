import request from '@/utils/request'

export function getMenu(params) {
	return request({
		url: '/menu/getList',
		method: 'get',
		params: params,
	})
}
