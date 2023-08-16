import { FC } from 'react'
import Image from 'next/image'
import earth from './earth.png'
import { image } from './style.css'

export const Earth: FC<Omit<Parameters<typeof Image>[0], 'src' | 'alt'>> = ({ className, ...props }) => (
	<Image {...props} className={`${image} ${className}`} alt='earth' src={earth} />
)
