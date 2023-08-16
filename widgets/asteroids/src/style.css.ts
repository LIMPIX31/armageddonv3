import { style } from '@vanilla-extract/css'
import { vars } from '@theme/css'

export const loadingStatus = style({
	color: vars.color.foreground,
	fontWeight: '900',
})
