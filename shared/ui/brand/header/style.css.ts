import { style } from '@vanilla-extract/css'
import { vars } from '@theme/css'

export const header = style({
	display: 'flex',
	flexDirection: 'column',
	fontFamily: vars.font.main,
	color: vars.color.foreground,
	gap: 12,
})

export const title = style({
	fontSize: '3rem',
	fontWeight: '900',
	color: vars.color.primary,
})
