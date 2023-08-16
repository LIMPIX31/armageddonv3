'use client'

import { FC, useCallback, useEffect } from 'react'
import { list, loadingStatus, root, title } from './style.css'
import { AsteroidCard } from '@entity/asteroid'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { browse, BrowseResponse } from '@api/asteroids'
import { useStore } from 'effector-react'
import { $cart, addToCart } from '@entity/cart'
import { AddToCartButton } from '@feature/add-to-cart'

function useAsteroids() {
	const { ref, inView } = useInView()

	const { status, data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
		queryKey: ['asteroids'],
		queryFn: async ({ pageParam: page = 0 }) => browse({ page }),
		defaultPageParam: 0,
		getPreviousPageParam: (firstPage: BrowseResponse) =>
			firstPage.page.number - 1 >= 0 ? firstPage.page.number - 1 : undefined,
		getNextPageParam: (lastPage: BrowseResponse) =>
			lastPage.page.number + 1 <= lastPage.page.total_pages ? lastPage.page.number + 1 : undefined,
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

	return (
		<div className={root}>
			<div className={title}>Ближайшие подлёты астероидов</div>
			{status === 'pending' ? (
				<div className={loadingStatus}>Загрузка</div>
			) : status === 'error' ? (
				<div className={loadingStatus}>Ошибка</div>
			) : (
				<div className={list}>
					{data!.pages.map((page) => (
						<>
							{page.near_earth_objects.map((asteroid) => (
								<AsteroidCard
									key={asteroid.id}
									asteroid={asteroid}
									units='kilometers'
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
				</div>
			)}
		</div>
	)
}
