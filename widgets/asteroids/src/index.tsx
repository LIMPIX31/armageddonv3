'use client'

import { FC, useCallback, useEffect, useState } from 'react'
import { loadingStatus } from './style.css'
import { AsteroidCard } from '@entity/asteroid'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { feed, FeedResponse } from '@api/asteroids'
import { useStore } from 'effector-react'
import { $cart, addToCart } from '@entity/cart'
import { AddToCartButton } from '@feature/add-to-cart'
import { TitledList } from '@ui/titled-list'
import { useRouter } from 'next/navigation'
import { TextSwitch } from '@ui/text-switch'

function useAsteroids() {
	const { ref, inView } = useInView()

	const { status, data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
		queryKey: ['asteroids'],
		queryFn: async ({ pageParam: date }) => feed({ date }),
		defaultPageParam: new Date().toISOString().slice(0, 10),
		getPreviousPageParam: (firstPage: FeedResponse) => firstPage.pagination.prev,
		getNextPageParam: (lastPage: FeedResponse) => lastPage.pagination.next,
	})

	useEffect(() => {
		if (inView) {
			fetchNextPage()
		}
	}, [fetchNextPage, inView])

	return { ref, status, data, isFetchingNextPage }
}

function useGetAlreadyInCart() {
	const cart = useStore($cart)

	return useCallback((id: string) => cart.some(({ id: cid }) => cid === id), [cart])
}

export const Asteroids: FC = () => {
	const { ref, data, status, isFetchingNextPage } = useAsteroids()
	const getAlreadyInCart = useGetAlreadyInCart()
	const [units, setUnits] = useState<'kilometers' | 'lunar'>('kilometers')
	const { push } = useRouter()

	return (
		<TitledList
			title='Ближайшие подлёты астероидов'
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
			{status === 'pending' ? (
				<div className={loadingStatus}>Загрузка</div>
			) : status === 'error' ? (
				<div className={loadingStatus}>Ошибка</div>
			) : (
				<>
					{data!.pages.map((page) => (
						<>
							{page.near_earth_objects.map((asteroid) => (
								<AsteroidCard
									key={asteroid.id}
									asteroid={asteroid}
									units={units}
									onClick={() => push(`asteroid/${asteroid.id}`)}
									features={[
										<AddToCartButton
											alreadyInCart={getAlreadyInCart(asteroid.id)}
											onClick={() => addToCart(asteroid)}
											key='add-to-cart-button'
										/>,
									]}
								/>
							))}
						</>
					))}
					<div ref={ref} className={loadingStatus}>
						{isFetchingNextPage ? 'Загрузка' : 'Астероиды закончились'}
					</div>
				</>
			)}
		</TitledList>
	)
}
