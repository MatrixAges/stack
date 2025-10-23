'use client'

import { useMemoizedFn } from 'ahooks'

import { sleep } from '@/utils'
import { preset_providers, Providers } from '@matrixages/ai-sdk-panel'

import type { IPropsProviders } from '@matrixages/ai-sdk-panel'

const Index = () => {
	const props_providers: IPropsProviders = {
		// config: { providers: all_providers },
		tab: 'between',
		onChange: v => {
			// console.log(v)
		},
		onTest: useMemoizedFn(async () => {
			await sleep(500)

			return true
		}),
		config: { providers: preset_providers },
		width: 690
	}

	return (
		<div className='flex justify-center w-screen min-h-screen py-20'>
			<Providers {...props_providers} />
		</div>
	)
}

export default Index
