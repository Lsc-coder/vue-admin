import router from '@/router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

//配置白名单
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
	console.log('🚀 ~ router.beforeEach ~ to:', from)

	// start progress bar
	NProgress.start()
	document.title = to.meta.title as string
	if (whiteList.includes(to.path)) {
		next()
	}
	if (localStorage.getItem('access_token')) {
		next()
	} else {
		next({
			path: '/login',
		})
	}
	next()
	NProgress.done()
})
router.afterEach((to, from) => {
	console.log('🚀 ~ router.beforeEach ~ to:', to, from)

	window.scrollTo(0, 0)
})
