'use client'

import { useMemoizedFn } from 'ahooks'

import { memo, sleep } from '@/utils'
import { all_providers, preset_providers, Providers } from '@matrixages/ai-sdk-panel'

import type { IPropsProviders } from '@matrixages/ai-sdk-panel'

const Index = () => {
	const props_providers: IPropsProviders = {
		// config: { providers: all_providers },
		config: { providers: preset_providers },
		tab: 'between',
		onChange: v => {
			// console.log(v)
		},
		onTest: useMemoizedFn(async () => {
			await sleep(500)

			return true
		}),
		width: 690
	}

	return <Providers {...props_providers} />
}

export default memo(Index)
