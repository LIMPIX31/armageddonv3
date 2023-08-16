export interface TextSwitchProps<T> {
	value: T
	options: Array<{ id: T; label: string }>
	onChange: (option: T) => void
}
