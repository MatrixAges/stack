import Link from 'next/link'

const Index = () => {
	return (
		<div
			className='
				flex flex-col justify-center items-center
				w-screen h-screen
				gap-9
			'
		>
			<h1 className='text-3xl font-medium'>MatrixAges Stack</h1>
			<Link
				className='
					text-xl font-medium text-gray-800
					underline underline-offset-2
				'
				href='/ai-sdk-panel'
			>
				AI SDK PANEL
			</Link>
		</div>
	)
}

export default Index
