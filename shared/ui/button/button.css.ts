import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@theme/css'

export const button = recipe({
	base: {
		cursor: 'pointer',
		font: vars.font.main,
		borderRadius: vars.radius.md,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: '500',
		transition: '.3s background-color, color',
	},

	variants: {
		variant: {
			contained: {
				background: vars.color.primary,
				color: vars.color.background,
				':hover': {
					background: vars.color.primaryDark,
				},
			},
			surface: {
				background: vars.color.semiprimary,
				color: vars.color.primary,
				':hover': {
					background: vars.color.semiprimaryLight,
				},
			},
		},
		size: {
			sm: {
				padding: '8px 10px',
				fontSize: '0.9rem',
				borderRadius: vars.radius.sm,
			},
			md: {
				padding: '12px 16px',
			},
		},
		disabled: {
			true: {
				cursor: 'not-allowed',
			},
		},
	},

	compoundVariants: [
		{
			variants: {
				variant: 'contained',
				disabled: true,
			},
			style: {
				background: vars.color.grayDisabled,
				color: vars.color.grayDisabledText,
				':hover': {
					background: vars.color.grayDisabled,
					color: vars.color.grayDisabledText,
				},
			},
		},
		{
			variants: {
				variant: 'surface',
				disabled: true,
			},
			style: {
				background: vars.color.semigrayDisabled,
				color: vars.color.grayDisabledTextDark,
				':hover': {
					background: vars.color.semigrayDisabled,
					color: vars.color.grayDisabledTextDark,
				},
			},
		},
	],

	defaultVariants: {
		variant: 'contained',
		size: 'md',
		disabled: false,
	},
})
