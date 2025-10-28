import '@/styles/global.css'

import { ThemeProvider } from 'next-themes'

import ThemeSwitch from './ThemeSwitch'

import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

export default ({ children }: PropsWithChildren) => {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className='font-sans bg-white antialiased'>
				<ThemeProvider defaultTheme='light'>
					<ThemeSwitch />
					<div className='bg-amber-100/20 dark:bg-amber-100/6'>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	)
}

export const metadata: Metadata = {
	title: 'Matrixages Stack'
}
