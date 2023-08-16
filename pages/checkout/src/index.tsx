import { FC } from 'react'
import { HomeLayout } from '@layout/home'
import { Earth, Header } from '@ui/brand'
import { Order } from '@widget/order'

export const CheckoutPage: FC = () => (
	<HomeLayout
		header={<Header key='header' />}
		earth={<Earth key='earth' width={2048} height={2048} />}
		container={<Order />}
		cart={<div />}
	/>
)
