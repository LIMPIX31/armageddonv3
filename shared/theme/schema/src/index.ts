export const primary = '#ffcc6f' as const
export const background = '#1d1d1d' as const
export const foreground = '#fef7f0' as const
export const red = '#d66a5c' as const
export const green = '#349465' as const

export const semiprimary = `color-mix(in srgb, ${background}, ${primary} 20%)`
export const semiprimaryLight = `color-mix(in srgb, ${background}, ${primary} 30%)`

export const primaryDark = `color-mix(in srgb, ${background}, ${primary} 90%)`

export const grayDisabled = `color-mix(in srgb, ${background}, ${foreground} 20%)`
export const grayDisabledText = `color-mix(in srgb, ${background}, ${foreground} 80%)`
export const grayDisabledTextDark = `color-mix(in srgb, ${background}, ${grayDisabledText} 80%)`
export const semigrayDisabled = `color-mix(in srgb, ${background}, ${grayDisabled} 20%)`

export const semired = `color-mix(in srgb, ${background}, ${red} 20%)`

export const radius = {
	sm: '3px',
	md: '6px',
} as const
