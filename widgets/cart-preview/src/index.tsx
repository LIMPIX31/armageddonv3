'use client'

import { FC } from 'react'
import { useStore } from 'effector-react'
import { $cart } from '@entity/cart'
import { CartPreview as ECartPreview } from '@entity/cart'

export const CartPreview: FC = () => {
	const cart = useStore($cart)

	return <ECartPreview count={cart.length} submit={() => {}} />
}
