import type { FC } from 'react'
import * as s from './titled-list.css'
import type { TitledListProps } from './titled-list.interface'

export const TitledList: FC<TitledListProps> = ({ title, features, children }) => (
	<div className={s.root}>
		<div className={s.title}>{title}</div>
		<div className={s.features}>{features}</div>
		<div className={s.list}>{children}</div>
	</div>
)
