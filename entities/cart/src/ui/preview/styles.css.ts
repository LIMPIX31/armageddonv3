import { style } from '@vanilla-extract/css'
import { vars } from '@theme/css'

export const root = style({
	display: 'flex',
	gap: 32,
	flexDirection: 'column',
	backgroundColor: vars.color.semigrayDisabled,
	padding: 16,
	borderRadius: vars.radius.md,
	'@media': {
		'(width < 1000px)': {
			width: '100vw',
		},
	},
})

export const info = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 6,
	color: vars.color.foreground,
})

export const title = style({
	fontSize: '1.2rem',
	fontWeight: '900',
})
