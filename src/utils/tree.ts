// 数组转tree
export function arrTotree(arr: Array<any>, rootId = 0) {
	const map: any = {}
	const treeList: Array<any> = []
	arr.forEach((item) => {
		const { pid, id } = item
		map[id] = item
		if (pid === rootId) {
			treeList.push(map[id])
		} else {
			map[pid] = map[pid] || {}
			map[pid].children = map[pid].children || []
			map[pid].children.push(map[id])
		}
	})
	return treeList
}
