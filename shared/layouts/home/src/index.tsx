import { FC, ReactNode } from 'react'
import { earthDesktop, rootDesktop, row } from './style.css'

export interface HomeLayoutProps {
	header: ReactNode
	earth: ReactNode
	container: ReactNode
	cart: ReactNode
}

export const HomeLayout: FC<HomeLayoutProps> = ({ header, container, cart, earth }) => (
	<div className={rootDesktop}>
		{header}
		<div className={row}>
			<div className={earthDesktop}>{earth}</div>
			{container}
			{cart}
		</div>
	</div>
)
