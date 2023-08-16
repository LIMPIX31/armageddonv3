import type { TextSwitchProps } from './text-switch.interface'
import * as s from './text-switch.css'
import { Fragment } from 'react'

export const TextSwitch = <T extends string | number>({ value, options, onChange }: TextSwitchProps<T>) => (
	<div className={s.root}>
		{options.map(({ id, label }, idx) => (
			<Fragment key={id}>
				{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
				<div key={`label-${id}`} className={s.label[value === id ? 'active' : 'default']} onClick={() => onChange(id)}>
					{label}
				</div>
				{idx !== options.length - 1 && <div key={`divider-${id}`} className={s.divider} />}
			</Fragment>
		))}
	</div>
)
