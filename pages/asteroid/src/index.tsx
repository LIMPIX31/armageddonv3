import { FC } from 'react'
import { getAsteroid } from '@api/asteroids'
import { container, erroContainer, error } from './style.css'
import { AsteroidPassport } from '@entity/asteroid'

export interface AsteroidPageProps {
	id: string
}

export const AsteroidPage: FC<AsteroidPageProps> = async ({ id }) => {
	const asteroid = await getAsteroid(id)

	if ('errStatus' in asteroid) {
		return (
			<div className={erroContainer}>
				<div className={error}>{asteroid.errStatus}</div>
			</div>
		)
	}

	return (
		<div className={container}>
			<AsteroidPassport asteroid={asteroid} />
		</div>
	)
}
