import type { ComponentProps } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {
	variant?: 'contained' | 'surface'
	disabled?: boolean
	size?: 'sm' | 'md'
}
