import { createTheme } from '@vanilla-extract/css'
import {
	background,
	foreground,
	grayDisabled,
	grayDisabledText,
	grayDisabledTextDark,
	green,
	primary,
	primaryDark,
	radius,
	red,
	semigrayDisabled,
	semiprimary,
	semiprimaryLight, semired,
} from '@theme/schema'

export const [theme, vars] = createTheme({
	color: {
		primary,
		background,
		green,
		red,
		semiprimary,
		semiprimaryLight,
		primaryDark,
		grayDisabled,
		grayDisabledText,
		semigrayDisabled,
		grayDisabledTextDark,
		foreground,
		semired,
	},
	font: {
		main: 'var(--font-mabry)',
	},
	radius,
})
