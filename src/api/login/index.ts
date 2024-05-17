import request from '@/utils/request'

export function accountLogin(params: {}) {
	return request({
		url: '/user/login',
		method: 'get',
		params,
	})
}
