import { EarthObject } from './types'
import { makeUrl } from './make-url'

export async function getAsteroid(id: string): Promise<EarthObject | { errStatus: number }> {
	const url = makeUrl(id)

	return fetch(url).then((res) => {
		if (!res.ok) {
			return { errStatus: res.status }
		}

		return res.json()
	})
}
