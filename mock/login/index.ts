import Mock from 'mockjs'
const result = {
	code: 200,
	message: 'success',
	data: [
		{
			name: '超级管理员',
			avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
			id: 25744,
			userId: 'admin',
			userName: '超级管理员',
			access_token: 'f2c24c6d-14f3-41cd-b297-74580eae9834',
		},
		{
			name: '普通用户',
			avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
			userId: 'user',
			userName: '普通用户',
			access_token: 'f2c24c6d-14f3-41cd-b297-74580eae9834',
		},
	],
}
export default [
	{
		url: '/api/user/login',
		type: 'get',
		response: (data) => {
			console.log('🚀 ~ data:', data)
			result.data = result.data.filter((item) => item.userId == data.query.account)

			return Mock.mock(result)
		},
	},
]
