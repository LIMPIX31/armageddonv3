import { FC, ReactNode } from 'react'
import { content, earthDesktop, rootDesktop, row, side } from './style.css'

export interface HomeLayoutProps {
	header: ReactNode
	earth: ReactNode
	container: ReactNode
	cart: ReactNode
}

export const HomeLayout: FC<HomeLayoutProps> = ({ header, container, cart, earth }) => (
	<div className={rootDesktop}>
		<div />
		<div className={row}>
			<div>
				{header}
				<div className={earthDesktop}>
					{earth}
				</div>
			</div>
			<div className={content}>{container}</div>
			<div className={side}>{cart}</div>
		</div>
	</div>
)
