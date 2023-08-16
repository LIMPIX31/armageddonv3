'use client'

import { FC, useState } from 'react'
import { useStore } from 'effector-react'
import { $cart } from '@entity/cart'
import { TitledList } from '@ui/titled-list'
import { AsteroidCard } from '@entity/asteroid'
import { TextSwitch } from '@ui/text-switch'

export const Order: FC = () => {
	const [units, setUnits] = useState<'kilometers' | 'lunar'>('kilometers')
	const cart = useStore($cart)

	return (
		<TitledList
			title='Заказ отправлен'
			features={[
				<TextSwitch
					key='units-switch'
					value={units}
					options={[
						{ id: 'kilometers', label: 'Километры' },
						{ id: 'lunar', label: 'Лунные орбиты' },
					]}
					onChange={setUnits}
				/>,
			]}
		>
			{cart.map((asteroid) => (
				<AsteroidCard asteroid={asteroid} units={units} key={asteroid.id} />
			))}
		</TitledList>
	)
}
