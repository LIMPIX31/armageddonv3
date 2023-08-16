'use client'

import { FC, useEffect } from 'react'
import { list, loadingStatus, root, title } from './style.css'
import { AsteroidCard } from '@entity/asteroid'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { browse, BrowseResponse } from '@api/asteroids'

export const Asteroids: FC = () => {
	const { ref, inView } = useInView()

	const {
		status,
		data,
		error,
		isFetching,
		isFetchingNextPage,
		isFetchingPreviousPage,
		fetchNextPage,
		fetchPreviousPage,
		hasNextPage,
		hasPreviousPage,
	} = useInfiniteQuery({
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

	return (
		<div className={root}>
			<div className={title}>Ближайшие подлёты астероидов</div>
			{status === 'pending' ? (
				<div className={loadingStatus}>Загрузка</div>
			) : status === 'error' ? (
				<div className={loadingStatus}>Ошибка</div>
			) : (
				<div className={list}>
					{data.pages.map((page) => (
						<>
							{page.near_earth_objects.map((asteroid) => (
								<AsteroidCard asteroid={asteroid} units='kilometers' />
							))}
						</>
					))}
					<div ref={ref} className={loadingStatus}>
						Loading
					</div>
				</div>
			)}
		</div>
	)
}
