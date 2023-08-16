import { style } from '@vanilla-extract/css'
import { vars } from '@theme/css'

export const container = style({
	maxWidth: 1200,
	margin: '0 auto',
	marginTop: 64,
	padding: 8,
})

export const erroContainer = style({
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
})

export const error = style({
	fontSize: '16rem',
	fontWeight: '900',
	color: vars.color.red,
})
