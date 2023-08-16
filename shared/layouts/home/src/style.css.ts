import { style } from '@vanilla-extract/css'

export const rootDesktop = style({
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	gap: 32,
	padding: '64px 64px 0 64px',
	height: '100vh',
})

export const row = style({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr',
	gap: 16,
	flexGrow: 1,
})

export const rootMobile = style({
	display: 'flex',
	flexDirection: 'column',
})

export const earthDesktop = style({
	translate: '-50%',
})

export const side = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
})

export const content = style({
	overflowY: 'scroll',
	height: '85dvh',
})
