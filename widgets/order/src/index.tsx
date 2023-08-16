'use client'

import { FC } from 'react'
import { useStore } from 'effector-react'
import { $cart } from '@entity/cart'
import { TitledList } from '@ui/titled-list'
import { AsteroidCard } from '@entity/asteroid'

export const Order: FC = () => {
	const cart = useStore($cart)

	return (
		<TitledList title='Заказ отправлен'>
			{cart.map((asteroid) => (
				<AsteroidCard asteroid={asteroid} units='kilometers' key={asteroid.id} />
			))}
		</TitledList>
	)
}
