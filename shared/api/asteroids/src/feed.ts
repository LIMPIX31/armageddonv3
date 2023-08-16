import { makeUrl } from './make-url'
import type { FeedResponse } from './types'

export interface BrowseParams {
	date: string
}

const WEEK = 7 * 24 * 60 * 60 * 1000

export async function feed({ date }: BrowseParams): Promise<FeedResponse> {
	const url = makeUrl('feed', {
		start_date: date,
	})

	return fetch(url)
		.then((res) => res.json())
		.then((data) => ({
			...data,
			near_earth_objects: Object.entries(data.near_earth_objects)
				.sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime())
				.flatMap(([, value]) => value),
			pagination: {
				prev: new Date(new Date(date).getTime() - WEEK).toISOString().slice(0, 10),
				next: new Date(new Date(date).getTime() + WEEK).toISOString().slice(0, 10),
			},
		}))
}

new Date().toLocaleDateString()
