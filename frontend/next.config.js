/** @type {import('next').NextConfig} */

const routesParams = require("./settings/routes-params.json")

function generateRewrites() {
	const definedRoutes = []

	routesParams.forEach((params) => {
		const cities = `(${params.cities.join("|")})`
		const langs = `(${params.langs.join("|")})`

		const folder = [
			{
				type: "host",
				value: `(${params.subdomain}\..*)`,
			},
		]

		definedRoutes.push({
			source: `/:lang${langs}/:slugs(.*)`,
			has: folder,
			destination: `/:slugs?lang=:lang`,
		})
		definedRoutes.push({
			source: `/:slugs(.*)/:city${cities}`,
			has: folder,
			destination: `/:slugs?city=:city`,
		})
		definedRoutes.push({
			source: `/:lang${langs}/:slugs(.*)/:city${cities}`,
			has: folder,
			destination: `/:slugs?lang=:lang&city=:city`,
		})
		definedRoutes.push({
			source: `/:lang${langs}`,
			has: folder,
			destination: `/`,
		})
		definedRoutes.push({
			source: `/:city${cities}`,
			has: folder,
			destination: `/`,
		})
		definedRoutes.push({
			source: `/:lang${langs}/:city${cities}`,
			has: folder,
			destination: `/`,
		})
	})

	return definedRoutes
}

const routes = generateRewrites()

const nextConfig = {
	async rewrites() {
		return routes
	},
	trailingSlash: true,
}

module.exports = nextConfig
