import { FC, ReactNode, useMemo } from 'react'
import { earthDesktop, rootDesktop, rootMobile, row } from './style.css'

export interface HomeLayoutProps {
	header: ReactNode
	earth: ReactNode
	container: ReactNode
	cart: ReactNode
}

export const HomeLayout: FC<HomeLayoutProps> = ({ header, container, cart, earth }) => {
	const isMobile = useMemo(() => (typeof window !== 'undefined' ? window.matchMedia('(width <= 600px)') : false), [])

	if (isMobile) {
		return (
			<div className={rootMobile}>
				{header}
				{container}
			</div>
		)
	}

	return (
		<div className={rootDesktop}>
			{header}
			<div className={row}>
				<div className={earthDesktop}>{earth}</div>
				{container}
				{cart}
			</div>
		</div>
	)
}
