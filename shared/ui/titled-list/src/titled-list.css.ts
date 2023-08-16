import { style } from '@vanilla-extract/css'
import { vars } from '@theme/css'

export const root = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 32,
})

export const title = style({
	color: vars.color.foreground,
	fontWeight: '900',
	fontSize: '2rem',
})

export const list = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 12,
})

export const features = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
})
