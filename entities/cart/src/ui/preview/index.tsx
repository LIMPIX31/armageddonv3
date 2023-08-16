import { FC, ReactNode } from 'react'
import { declonate } from '@lib/declensions'
import * as s from './styles.css'

export interface PreviewProps {
	count: number
	submitFeature: ReactNode
}

export const Preview: FC<PreviewProps> = ({ count, submitFeature }) => (
	<div className={s.root}>
		<div className={s.info}>
			<div className={s.title}>Корзина</div>
			<div>
				{count} {declonate('a', 'астероид', count)}
			</div>
		</div>
		{submitFeature}
	</div>
)
