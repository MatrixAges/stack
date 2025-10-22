'use client'

import { useMemoizedFn } from 'ahooks'
import { useTheme } from 'next-themes'

import { useMounted } from '@/hooks'
import { memo } from '@/utils'
import { MoonIcon, SunIcon } from '@phosphor-icons/react'

const Index = () => {
	const { theme, setTheme } = useTheme()
	const mounted = useMounted()

	const toggleTheme = useMemoizedFn(() => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	})

	if (!mounted) return

	return (
		<div
			className='
				flex justify-center items-center
				w-7 h-7
				outline-gray-900/6
				rounded-full
				hover:bg-gray-600/6 active:scale-95 hover:outline
				fixed top-5 right-5 transition
			'
			onClick={toggleTheme}
		>
			{theme === 'dark' ? <SunIcon /> : <MoonIcon />}
		</div>
	)
}

export default memo(Index)
