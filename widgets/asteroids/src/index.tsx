import { FC } from 'react'
import { list, root, title } from './style.css'
import { AsteroidCard } from '@entity/asteroid'

export const Asteroids: FC = () => (
	<div className={root}>
		<div className={title}>Ближайшие подлёты астероидов</div>
		<div className={list}>
			<AsteroidCard
				date='12 сент 2023'
				distance='5 652 475 км'
				diameter='85 м'
				quarter='2021 FQ'
				size='lg'
				isDanger
			/>
		</div>
	</div>
)
