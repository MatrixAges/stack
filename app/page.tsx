'use client'

import { useMemoizedFn } from 'ahooks'

import { sleep } from '@/utils'
import { all_providers, preset_providers, Providers } from '@matrixages/ai-sdk-panel'

import type { IPropsProviders } from '@matrixages/ai-sdk-panel'

const Index = () => {
	const props_providers: IPropsProviders = {
		config: { providers: all_providers },
		variant: { tab: { type: 'tab', layout: 'scroll' } },
		onChange: v => {
			// console.log(v)
		},
		onTest: useMemoizedFn(async () => {
			await sleep(500)

			return true
		}),
		// config: { providers: preset_providers },
		width: 690
	}

	return (
		<div
			className='
				flex justify-center
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
