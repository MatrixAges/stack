'use client'

import { all_providers, preset_providers, Providers } from '@matrixages/ai-sdk-panel'
import { sleep } from '@/utils'

import type { IPropsProviders } from '@matrixages/ai-sdk-panel'
import { useMemoizedFn } from 'ahooks'

const Index = () => {
	const props_providers: IPropsProviders = {
		value: { providers: all_providers },
		tab: { type: 'tab', layout: 'scroll' },
		onChange: v => {
			console.log(v)
		},
		onTest: useMemoizedFn(async () => {
			await sleep(400)

			return false
			return true
		}),
		// config: { providers: preset_providers },
		width: 690
	}

	return (
		<div
			className='
				flex justify-center items-center
				w-screen min-h-screen
				bg-amber-100/20
				dark:bg-amber-100/6
				py-20
			'
		>
			<Providers {...props_providers} />
		</div>
	)
}

export default Index
