import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@theme/css'

export const card = style({
	display: 'flex',
	flexDirection: 'column',
	color: vars.color.foreground,
	gap: 32,
})

export const date = style({
	display: 'flex',
	gap: 12,
	fontSize: '1.5rem',
	fontWeight: '600',
})

export const stats = style({
	display: 'flex',
	gap: 32,
})

export const arrow = style({
	height: 2,
	margin: '10px 0',
	backgroundColor: vars.color.grayDisabled,
	rotate: '0deg',
	translate: '0 7px',
	transformOrigin: 'bottom left',
	position: 'relative',
	':after': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		borderStyle: 'solid',
		translate: '-50% -40%',
		rotate: '-90deg',
		borderWidth: '0 5px 10px 5px',
		borderColor: `${vars.color.grayDisabled} transparent`,
	},
	':before': {
		content: '""',
		position: 'absolute',
		top: 0,
		right: 0,
		borderStyle: 'solid',
		translate: '50% -40%',
		rotate: '-90deg',
		borderWidth: '10px 5px 0 5px',
		borderColor: `${vars.color.grayDisabled} transparent`,
	},
})

const sizeBase = style({
	borderRadius: '50%',
	aspectRatio: '1 / 1',
})

export const sizeIndicatorVariant = styleVariants({
	sm: [
		sizeBase,
		{
			width: '40%',
			backgroundColor: vars.color.green,
		},
	],
	md: [
		sizeBase,
		{
			width: '60%',
			backgroundColor: vars.color.primary,
		},
	],
	lg: [
		sizeBase,
		{
			width: '100%',
			backgroundColor: vars.color.red,
		},
	],
})

export const size = style({
	display: 'flex',
	gap: 16,
})

export const sizeIndicatorContainer = style({
	aspectRatio: '1 / 1',
	flexShrink: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
})

export const radiusBorder = style({
	width: '100%',
	height: '100%',
	position: 'absolute',
	inset: 0,
	borderRadius: '50%',
	borderWidth: 1,
	borderStyle: 'solid',
	borderColor: vars.color.semigrayDisabled,
	zIndex: -1,
})

export const diameterStats = style({
	display: 'flex',
	flexDirection: 'column',
	flexShrink: 0,
	justifyContent: 'space-between',
})

export const diameter = style({
	fontSize: '0.8rem',
	color: vars.color.grayDisabledText,
	display: 'flex',
	alignItems: 'center',
	gap: 6,
})

export const danger = style({
	display: 'inline-flex',
	fontSize: '0.9rem',
	alignItems: 'center',
	padding: '5px 8px',
	backgroundColor: vars.color.semired,
	color: vars.color.red,
	borderRadius: vars.radius.sm,
	gap: 6,
})

export const features = style({
	display: 'flex',
	gap: 24,
})
