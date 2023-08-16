import { style } from '@vanilla-extract/css'
import { vars } from '@theme/css'

export const root = style({
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	gap: 32,
	padding: '64px 64px 0 64px',
	height: '100vh',
	'@media': {
		'(width < 1000px)': {
			gap: 0,
			padding: '16px 16px 0 16px',
		},
	},
})

export const row = style({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr',
	gap: 16,
	flexGrow: 1,
	'@media': {
		'(width < 1000px)': {
			display: 'flex',
			gap: 64,
			flexDirection: 'column',
		},
	},
})

export const earth = style({
	translate: '-50% 20%',
	width: 512,
	height: 512,
	'@media': {
		'(width < 1000px)': {
			width: 384,
			height: 384,
			position: 'absolute',
			zIndex: -1,
			filter: 'blur(100px)',
			opacity: 0.5,
		},
	},
})

export const side = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	'@media': {
		'(width < 1000px)': {
			position: 'fixed',
			bottom: 0,
			left: 0,
		},
	},
})

export const content = style({
	overflowY: 'scroll',
	overflowX: 'hidden',
	height: '85dvh',
	'@media': {
		'(width < 1000px)': {
			overflowY: 'auto',
			height: 'auto',
		},
	},
})
