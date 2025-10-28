import Client from './client'

import type { Metadata } from 'next'

const Index = () => {
	return (
		<div className='flex justify-center w-screen min-h-screen py-20'>
			<Client />
		</div>
	)
}

export default Index

export const metadata: Metadata = {
	title: 'AI SDK Panel',
	description: 'The config panel for AI SDK.',
	icons: { icon: '/ai-sdk-panel.svg' }
}
