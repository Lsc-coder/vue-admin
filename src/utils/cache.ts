class Cache {
	private cache: Map<string, any> = new Map()

	set(key: string, value: any) {
		localStorage.setItem(key, JSON.stringify(value))
	}

	get(key: string) {
		if (key) return localStorage.getItem(JSON.parse(key))
	}

	delete(key: string) {
		localStorage.delete(key)
	}

	clear() {
		localStorage.clear()
	}
}
export const localStorageCache = new Cache()
