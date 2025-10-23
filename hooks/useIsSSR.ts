import { useDeferredValue, useSyncExternalStore } from 'react'

export default () => {
	const ssr = useSyncExternalStore(
		() => () => {},
		() => false,
		() => true
	)

	return useDeferredValue(ssr)
}
