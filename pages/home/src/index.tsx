import { FC } from 'react'
import { HomeLayout } from '@layout/home'
import { Earth, Header } from '@ui/brand'

export const HomePage: FC = () => (
	<HomeLayout
		header={<Header key='header' />}
		earth={<Earth key='earth' width={2048} height={2048} />}
		container={<div />}
		cart={<div />}
	/>
)
