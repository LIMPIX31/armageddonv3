import type { FC } from 'react'
import type { ButtonProps } from './button.interface'
import { button } from './button.css'

export const Button: FC<ButtonProps> = ({ size, variant, disabled, ...rest }) => (
	<button
		type='button'
		{...rest}
		disabled={disabled}
		className={button({
			variant,
			size,
			disabled,
		})}
	/>
)
