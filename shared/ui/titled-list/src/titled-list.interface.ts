import type { PropsWithChildren, ReactNode } from 'react'

export interface TitledListProps extends PropsWithChildren {
	title: string
	features?: ReactNode[]
}
