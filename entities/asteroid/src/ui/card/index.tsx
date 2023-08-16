import { FC, ReactNode } from 'react'
import * as s from './style.css'

export interface CardProps {
	date: string
	distance: string
	diameter: string
	quarter: string
	isDanger: boolean
	size: 'sm' | 'md' | 'lg'
	features?: ReactNode[]
}

export const Card: FC<CardProps> = ({ date, quarter, distance, diameter, isDanger, size, features }) => (
	<div className={s.card}>
		<div className={s.date}>{date}</div>
		<div className={s.stats}>
			<div>
				{distance}
				<div className={s.arrow} />
			</div>
			<div className={s.size}>
				<div className={s.sizeIndicatorContainer}>
					<div className={s.radiusBorder} />
					<div className={s.sizeIndicatorVariant[size]} />
				</div>
				<div className={s.diameterStats}>
					<div>{quarter}</div>
					<div className={s.diameter}>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='1em' height='1em'>
							<path
								fill='currentColor'
								d='M35.5,4.19,31.81.5,27.06,5.25A15.64,15.64,0,0,0,5.25,27.06L.5,31.81,4.19,35.5l4.75-4.75A15.64,15.64,0,0,0,30.75,8.94ZM7.56,18A10.46,10.46,0,0,1,18,7.56,10.34,10.34,0,0,1,23.29,9L9,23.29A10.34,10.34,0,0,1,7.56,18Zm20.88,0A10.46,10.46,0,0,1,18,28.44,10.34,10.34,0,0,1,12.71,27L27,12.71A10.34,10.34,0,0,1,28.44,18Z'
							/>
						</svg>
						{diameter}
					</div>
				</div>
			</div>
		</div>
		<div className={s.features}>
			{features}
			{isDanger && (
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
	</div>
)
