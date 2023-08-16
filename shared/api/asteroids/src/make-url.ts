const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/'

export function makeUrl(endpoint: string, options?: Record<string, string | number>) {
	const url = new URL(endpoint, BASE_URL)

	url.searchParams.append('api_key', process.env['NEXT_PUBLIC_API_KEY'] ?? 'DEMO_KEY')

	if (options) {
		Object.entries(options).forEach(([key, value]) => url.searchParams.append(key, value.toString()))
	}

	return url
}
