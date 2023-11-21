/** @type {import('next').NextConfig} */

const routesBase = require("./settings/routes-base.json")
const routesParams = require("./settings/routes-params.json")

function generateRoutes() {
	const definedRoutes = {}

	for (let route in routesBase) {
		const sources = []

		routesParams.forEach((subDomain) => {
			const cities = `(\\b(?!about|services|portfolio|contacts|${subDomain.langs.join("|")}\\b)\\w+)`
			const langs = `(${subDomain.langs.join("|")})`

			sources.push(`${routesBase[route]}/:city${cities}`)
			sources.push(`/:lang${langs}${routesBase[route]}`)
			sources.push(`/:lang${langs}${routesBase[route]}/:city${cities}`)
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
				destination: "/services/:slug?lang=:lang&city=:city",
			}))],
			[routes.portfolio.map((source) => ({
				source,
				destination: "/portfolio/",
			}))],
			[routes.project.map((source) => ({
				source,
				destination: "/portfolio/:slug?lang=:lang&city=:city",
			}))],
			[routes.contacts.map((source) => ({
				source,
				destination: "/contacts/",
			}))],
		].flat(Infinity)
	},
	trailingSlash: true,
}

module.exports = nextConfig
