import { createTheme } from '@vanilla-extract/css'
import { background, green, primary, red } from '@theme/schema'

export const [theme, vars] = createTheme({
	color: {
		primary,
		background,
		green,
		red,
	},
	font: {
		main: 'var(--font-mabry)',
	},
})
