import axios from 'axios'
const Srever = axios.create({
	baseURL: '/api',
	timeout: 10 * 1000,
})
//请求拦截
Srever.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => {
		return Promise.reject(error)
	},
)
//响应拦截
Srever.interceptors.response.use(
	(response) => {
		return response.data
	},
	(error) => {
		return Promise.reject(error)
	},
)
export default Srever
