import { style } from '@vanilla-extract/css'
import { vars } from '@theme/css'

export const root = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 64,
	'@media': {
		'(width < 800px)': {
			fontSize: '0.8rem',
		},
	},
})

export const name = style({
	fontSize: '4rem',
	fontWeight: 'bold',
	color: vars.color.primary,
})

export const table = style({

})

export const thead = style({
	fontWeight: '900',
})

export const th = style({
	fontSize: '1.25rem',
	color: vars.color.primary,
	backgroundColor: vars.color.semiprimary,
	padding: 16,
	border: `1px solid ${vars.color.primary}`,
	textAlign: 'center',
	'@media': {
		'(width < 800px)': {
			fontSize: '0.8rem',
			padding: '16px 4px',
		},
	},
})

export const td = style({
	color: vars.color.foreground,
	padding: 16,
	border: `1px solid ${vars.color.grayDisabled}`,
	'@media': {
		'(width < 800px)': {
			padding: '16px 4px',
		},
	},
})

export const tr = style({
	selectors: {
		'&:nth-child(even)': {
			borderRadius: 6,
			backgroundColor: vars.color.semigrayDisabled,
		},
	},
})
