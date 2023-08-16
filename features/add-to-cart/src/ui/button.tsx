import { FC } from 'react'
import { Button as SharedButton } from '@ui/button'

export interface ButtonProps {
	alreadyInCart?: boolean
	onClick: () => void
}

export const Button: FC<ButtonProps> = ({ alreadyInCart, onClick }) => (
	<SharedButton variant='surface' size='sm' disabled={alreadyInCart} onClick={onClick}>
		{alreadyInCart ? 'В корзине' : 'Заказать'}
	</SharedButton>
)
