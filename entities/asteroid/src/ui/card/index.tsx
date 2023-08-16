import { FC, ReactNode, useMemo } from 'react'
import * as s from './style.css'
import { Asteroid } from '../../model'
import { declonate } from '@lib/declensions'

export interface CardProps {
	asteroid: Asteroid
	units: 'lunar' | 'kilometers'
	features?: ReactNode[]
}

const numberIntl = new Intl.NumberFormat(window.navigator.language, { maximumFractionDigits: 0 })
const dateFormat = new Intl.DateTimeFormat(window.navigator.language, { dateStyle: 'medium' })

export const Card: FC<CardProps> = ({ asteroid, units, features }) => {
	const closeApproachData = useMemo(
		() => [...asteroid.close_approach_data].sort((a, b) => +a.miss_distance.kilometers - +b.miss_distance.kilometers),
		[asteroid.close_approach_data],
	)

	const filtered = useMemo(
		() =>
			closeApproachData
				.filter(({ epoch_date_close_approach }) => epoch_date_close_approach - Date.now() > 0)
				.sort((a, b) => a.epoch_date_close_approach - b.epoch_date_close_approach),
		[closeApproachData],
	)

	const nearest = useMemo(() => filtered.at(0), [filtered])

	const date = useMemo(() => dateFormat.format(new Date(nearest!.epoch_date_close_approach)), [nearest])
	const distance = useMemo(() => +nearest!.miss_distance.kilometers, [nearest])
	const diameter = useMemo(
		() => asteroid.estimated_diameter.meters.estimated_diameter_max,
		[asteroid.estimated_diameter.meters.estimated_diameter_max],
	)

	const size = useMemo(() => {
		if (diameter < 5000) {
			return 'sm'
		}

		if (diameter < 15_000) {
			return 'md'
		}

		return 'lg'
	}, [diameter])

	return (
		<div className={s.card}>
			<div className={s.date}>
				{date}
				{asteroid.is_potentially_hazardous_asteroid && (
					<div className={s.danger}>
						<svg viewBox='0 0 24 24' width='1.2em' height='1.2em'>
							<path
								fill='currentColor'
								d='M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z'
							/>
						</svg>
						Опасен
					</div>
				)}
			</div>
			<div className={s.stats}>
				<div>
					{numberIntl.format(distance)}
					{units === 'kilometers' ? 'км' : `${declonate('c', 'лунн', distance)} ${declonate('b', 'орбит', distance)}`}
					<div className={s.arrow} />
				</div>
				<div className={s.size}>
					<div className={s.sizeIndicatorContainer}>
						<div className={s.radiusBorder} />
						<div className={s.sizeIndicatorVariant[size]} />
					</div>
					<div className={s.diameterStats}>
						<div>{asteroid.name}</div>
						<div className={s.diameter}>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='1em' height='1em'>
								<path
									fill='currentColor'
									d='M35.5,4.19,31.81.5,27.06,5.25A15.64,15.64,0,0,0,5.25,27.06L.5,31.81,4.19,35.5l4.75-4.75A15.64,15.64,0,0,0,30.75,8.94ZM7.56,18A10.46,10.46,0,0,1,18,7.56,10.34,10.34,0,0,1,23.29,9L9,23.29A10.34,10.34,0,0,1,7.56,18Zm20.88,0A10.46,10.46,0,0,1,18,28.44,10.34,10.34,0,0,1,12.71,27L27,12.71A10.34,10.34,0,0,1,28.44,18Z'
								/>
							</svg>
							{numberIntl.format(asteroid.estimated_diameter.meters.estimated_diameter_max)} м
						</div>
					</div>
				</div>
			</div>
			<div className={s.features}>{features}</div>
		</div>
	)
}
