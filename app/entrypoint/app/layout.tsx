import './global.css'
import type { Metadata } from 'next'
import { mabry } from './fonts'
import type { ReactNode } from 'react'
import { QueryProvider } from './query'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
	title: 'Armageddon',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body className={mabry.variable}>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	)
}
