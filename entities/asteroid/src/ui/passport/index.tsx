'use client'

import { FC } from 'react'
import { Asteroid } from '../../model'
import * as s from './styles.css'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

const timeIntl = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium', timeStyle: 'medium' })
const numberIntl = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 })
const numberFracIntl = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 2 })

export interface PassportProps {
	asteroid: Asteroid
}

const columnHelper = createColumnHelper<Asteroid['close_approach_data'][0]>()

const columns = [
	columnHelper.accessor('orbiting_body', {
		header: 'Орбита',
		cell: (info) => info.getValue().toUpperCase(),
	}),
	columnHelper.accessor('epoch_date_close_approach', {
		header: 'Дата максимального сближения',
		cell: (info) => timeIntl.format(info.getValue()),
	}),
	columnHelper.accessor(({ miss_distance }) => miss_distance.kilometers, {
		header: 'Дистанция',
		cell: (info) => `${numberIntl.format(+info.getValue())} км`,
	}),
	columnHelper.accessor(({ relative_velocity }) => relative_velocity.kilometers_per_second, {
		header: 'Относительная скорость',
		cell: (info) => `${numberFracIntl.format(+info.getValue())} км/c`,
	}),
]

export const Passport: FC<PassportProps> = ({ asteroid }) => {
	const table = useReactTable({
		data: asteroid.close_approach_data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<div className={s.root}>
			<div className={s.name}>{asteroid.name}</div>
			<table className={s.table}>
				<thead className={s.thead}>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id} className={s.th}>
									{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr className={s.tr} key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td className={s.td} key={cell.id} suppressHydrationWarning>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
