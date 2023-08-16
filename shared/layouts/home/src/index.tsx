import { FC, ReactNode } from 'react'
import * as s from './style.css'

export interface HomeLayoutProps {
	header: ReactNode
	earth: ReactNode
	container: ReactNode
	cart: ReactNode
}

export const HomeLayout: FC<HomeLayoutProps> = ({ header, container, cart, earth }) => (
	<div className={s.root}>
		<div />
		<div className={s.row}>
			<div>
				{header}
				<div className={s.earth}>{earth}</div>
			</div>
			<div className={s.content}>{container}</div>
			<div className={s.side}>{cart}</div>
		</div>
	</div>
)
