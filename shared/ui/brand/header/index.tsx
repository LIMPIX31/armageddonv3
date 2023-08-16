import { FC } from 'react'
import { header, title } from './style.css'

export const Header: FC = () => (
	<div className={header}>
		<div className={title}>ARMAGEDDON 2023</div>
		<div>
			<div>ООО “Команда им. Б. Уиллиса”</div>
			<div>Взрываем астероиды с 1998 года</div>
		</div>
	</div>
)
