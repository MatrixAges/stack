import '@/styles/global.css'

import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

export default ({ children }: PropsWithChildren) => {
	return (
		<html lang='en' data-theme='light'>
			<head>
				<link id='favicon' rel='icon' type='image/svg+xml' href='logo.svg' />
			</head>
			<body className='font-sans bg-white antialiased'>
				<div className='bg-amber-100/20 dark:bg-amber-100/6'>{children}</div>
			</body>
		</html>
	)
}

export const metadata: Metadata = {
	title: 'AI SDK Panel',
	description: 'The config panel for AI SDK.'
}
