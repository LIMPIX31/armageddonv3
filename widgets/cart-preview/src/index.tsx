'use client'

import { FC } from 'react'
import { useStore } from 'effector-react'
import { $cart } from '@entity/cart'
import { CartPreview as ECartPreview } from '@entity/cart'
import { CartCheckoutButton } from '@feature/cart-checkout'
import { useRouter } from 'next/navigation'

export const CartPreview: FC = () => {
	const cart = useStore($cart)

	const { push } = useRouter()

	return (
		<ECartPreview
			count={cart.length}
			submitFeature={<CartCheckoutButton disabled={cart.length === 0} onClick={() => push('/checkout')} />}
		/>
	)
}
