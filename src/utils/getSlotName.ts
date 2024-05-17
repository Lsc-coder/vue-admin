export function getSlotName(slots: Object, type: string): Function {
	for (const key in slots) {
		slots[key].includes(type)
	}

	return function (main: string, type: string) {}
}
