export const useNumberAnimation = (options: {
	from: number
	to: number
	duration: number
	toFixed: number
	onUpdate?: Function
	onComplete?: Function
}) => {
	const { from, to, duration, onUpdate, onComplete, toFixed } = options
	let value: number = from
	// 算出增长速度
	const speed = (to - from) / duration
	//起始时间
	const startTime = Date.now()
	const run = () => {
		const now = Date.now() - startTime
		if (now < duration) {
			value = Number((from + speed * now).toFixed(toFixed))
			if (onUpdate) onUpdate(value)
			//继续执行
			requestAnimationFrame(run)
		} else {
			value = to
			if (onUpdate) onUpdate(value)
			if (onComplete) onComplete()
		}
	}
	run()
}
