import localFont from 'next/font/local'

export const mabry = localFont({
	variable: '--font-mabry',
	src: [
		{
			path: '../assets/fonts/300.mabry.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../assets/fonts/400.mabry.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/500.mabry.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/600.mabry.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/900.mabry.woff2',
			weight: '900',
			style: 'normal',
		},
	],
})
