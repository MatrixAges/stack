import Client from './client'

import type { Metadata } from 'next'

const Index = () => {
	return (
		<div
			className='
				flex flex-col items-center
				w-screen min-h-screen
				py-20
			'
		>
			<Client />
			<a
				className='
					pt-12
					text-xsm text-gray
					underline underline-offset-2
				'
				href='https://github.com/matrixages/ai-sdk-panel'
				target='_blank'
			>
				Github
			</a>
		</div>
	)
}

export default Index

export const metadata: Metadata = {
	title: 'AI SDK Panel',
	description: 'The config panel for AI SDK.',
	icons: { icon: '/ai-sdk-panel.svg' }
}
