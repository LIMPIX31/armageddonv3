const declensions = {
	a: Object.entries({
		'0|[5-9]|1[0-9]|20': 'ов',
		'1': '',
		'2|3|4': 'а',
	}).map(([group, ending]) => [new RegExp(`(${group})$`), ending] as [RegExp, string]),

	b: Object.entries({
		'0|[5-9]|1[0-9]|20': '',
		'1': 'a',
		'2|3|4': 'ы',
	}).map(([group, ending]) => [new RegExp(`(${group})$`), ending] as [RegExp, string]),

	c: Object.entries({
		'0|[5-9]|1[0-9]|20': 'ых',
		'1': 'aя',
		'2|3|4': 'ые',
	}).map(([group, ending]) => [new RegExp(`(${group})$`), ending] as [RegExp, string]),
}

export function declonate(mode: 'a' | 'b' | 'c', root: string, value: number) {
	for (const [regex, ending] of declensions[mode]) {
		if (regex.test(value.toString(10))) {
			return `${root}${ending}`
		}
	}

	return root
}
