import './global.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { mabry } from './fonts'
import { theme } from '@theme/css'
import { QueryProvider } from './query'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
	title: 'Armageddon',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${mabry.variable} ${theme}`}>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	)
}
