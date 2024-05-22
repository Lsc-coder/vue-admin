class locCache {
	private cache: Map<string, any> = new Map()

	set(key: string, value: any) {
		localStorage.setItem(key, JSON.stringify(value))
	}

	get(key: string) {
		if (key) return localStorage.getItem(JSON.parse(key))
	}

	delete(key: string | Array<string>) {
		if (typeof key === 'string') {
			localStorage.removeItem(key)
		} else if (key instanceof Array) {
			key.forEach((item) => {
				localStorage.removeItem(item)
			})
		}
	}

	clear() {
		localStorage.clear()
	}
}
export const localStorageCache = new locCache()
