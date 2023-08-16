export interface Pagination {
	prev: string
	next: string
}

export interface Diameter {
	estimated_diameter_min: number
	estimated_diameter_max: number
}

export interface DiameterOptions {
	meters: Diameter
	kilometers: Diameter
	miles: Diameter
	feet: Diameter
}

export interface MissDistance {
	astronomical: string
	lunar: string
	kilometers: string
	miles: string
}

export interface CloseApproachData {
	close_approach_date: string
	close_approach_date_full: string
	epoch_date_close_approach: number
	miss_distance: MissDistance
	relative_velocity: RelativeVelocity
	orbiting_body: string
}

export interface RelativeVelocity {
	kilometers_per_second: string
}

export interface EarthObject {
	id: string
	name: string
	name_limited: string
	designation: string
	estimated_diameter: DiameterOptions
	close_approach_data: CloseApproachData[]
	is_potentially_hazardous_asteroid: boolean
}

export interface FeedResponse {
	pagination: Pagination
	near_earth_objects: EarthObject[]
}
