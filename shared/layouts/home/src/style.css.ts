import { style } from '@vanilla-extract/css'

export const rootDesktop = style({
	display: 'flex',
	flexDirection: 'column',
	padding: 64,
})

export const row = style({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr',
	flexGrow: 1,
})

export const rootMobile = style({
	display: 'flex',
	flexDirection: 'column',
})

export const earthDesktop = style({
	translate: '-50%',
})
