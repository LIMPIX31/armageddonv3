import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@theme/css'

export const root = style({
	display: 'flex',
	gap: 6,
})

export const label = styleVariants({
	active: {
		cursor: 'pointer',
		color: vars.color.foreground,
		textDecoration: 'underline',
	},
	default: {
		cursor: 'pointer',
		color: vars.color.grayDisabledText,
		textDecoration: 'dashed',
	},
})

export const divider = style({
	width: '1px',
	backgroundColor: vars.color.grayDisabled,
})
