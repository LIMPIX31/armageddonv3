import { FC } from 'react'
import { Button as SharedButton } from '@ui/button'

export interface ButtonProps {
	onClick: () => void
	disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ disabled, onClick }) => (
	<SharedButton variant='contained' onClick={onClick} disabled={disabled}>
		Отправить
	</SharedButton>
)
