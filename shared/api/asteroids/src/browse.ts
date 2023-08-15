import { makeUrl } from './make-url'
import type { BrowseResponse } from './types'

export interface BrowseParams {
	page?: number
}

export async function browse({ page = 0 }: BrowseParams): Promise<BrowseResponse> {
	const url = makeUrl('browse', { page })

	return fetch(url).then((res) => res.json())
}
