import { FC } from 'react'
import { declonate } from '@lib/declensions'
import { Button } from '@ui/button'
import * as s from './styles.css'

export interface PreviewProps {
	count: number
	disabled?: boolean
	submit: () => void
}

export const Preview: FC<PreviewProps> = ({ count, disabled, submit }) => (
	<div className={s.root}>
		<div className={s.info}>
			<div className={s.title}>Корзина</div>
			<div>
				{count} {declonate('a', 'астероид', count)}
			</div>
		</div>
		<Button disabled={disabled} onClick={submit}>
			Отправить
		</Button>
	</div>
)
