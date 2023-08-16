import { style } from '@vanilla-extract/css'

export const image = style({
	aspectRatio: 1,
	width: 720,
	height: 720,
	objectFit: 'contain',
	position: 'relative',
})
