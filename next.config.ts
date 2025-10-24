// import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

import type { NextConfig } from 'next'

const is_dev = process.env.NODE_ENV === 'development'

const config: NextConfig = {
	reactStrictMode: false,
	devIndicators: false,
	outputFileTracingRoot: __dirname,
	turbopack: {
		rules: {
			'*.svg': {
				as: '*.js',
				loaders: [
					{
						loader: '@svgr/webpack',
						options: {
							svgo: true,
							svgoConfig: {
								plugins: [
									{
										name: 'preset-default',
										params: {
											overrides: {
												removeViewBox: false
											}
										}
									},
									'prefixIds'
								]
							}
						}
					}
				]
			}
		}
	}
}

export default config

// if (is_dev) initOpenNextCloudflareForDev()
