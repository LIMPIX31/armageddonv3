const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const workspaces = require('../../.yarn/artifacts/workspaces.json')

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: workspaces,
}

module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig))
