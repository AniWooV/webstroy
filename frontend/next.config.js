/** @type {import('next').NextConfig} */

const routesBase = require("./settings/routes-base.json")
const routesParams = require("./settings/routes-params.json")

function getRegex(params) {
	return `(${params.join("|")})`
}

function generateRoutes() {
	const definedRoutes = {}

	for (let route in routesBase) {
		const sources = []

		routesParams.forEach((subDomain) => {
			const cities = getRegex(subDomain.cities)
			const langs = getRegex(subDomain.langs)

			sources.push(`/:city${cities}${routesBase[route]}`)
			sources.push(`/:lang${langs}${routesBase[route]}`)
			sources.push(`/:city${cities}/:lang${langs}${routesBase[route]}`)
		})

		definedRoutes[route] = sources
	}

	return definedRoutes
}

const routes = generateRoutes()

const nextConfig = {
	async rewrites() {
		return [
			[routes.home.map((source) => ({
				source,
				destination: "/",
			}))],
			[routes.about.map((source) => ({
				source,
				destination: "/about/",
			}))],
			[routes.services.map((source) => ({
				source,
				destination: "/services/",
			}))],
			[routes.service.map((source) => ({
				source,
				destination: "/services/:slug/",
			}))],
			[routes.portfolio.map((source) => ({
				source,
				destination: "/portfolio/",
			}))],
			[routes.project.map((source) => ({
				source,
				destination: "/portfolio/:slug",
			}))],
			[routes.contacts.map((source) => ({
				source,
				destination: "/contacts/",
			}))],
		].flat(Infinity)
	},
}

module.exports = nextConfig
