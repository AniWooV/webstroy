/** @type {import('next').NextConfig} */

const routesBase = require("./settings/routes-base.json")
const routesParams = require("./settings/routes-params.json")

function generateRewrites() {
	const definedRewrites = {}

	for (let route in routesBase) {
		const rewrites = []

		for (let subdomain in routesParams) {
			const cities = `(${routesParams[subdomain].cities.join("|")})`
			const langs = `(${routesParams[subdomain].langs.join("|")})`

			const has = [{ type: "host", value: `(${subdomain}\..*)` }]

			rewrites.push(
				{
					source: `/:lang${langs}${routesBase[route]}`,
					has,
					destination: `${routesBase[route]}?lang=:lang&default-city=${routesParams[subdomain]["default-city"]}`,
				},
				{
					source: `${routesBase[route]}:city${cities}`,
					has,
					destination: `${routesBase[route]}?city=:city&default-locale=${routesParams[subdomain]["default-locale"]}`,
				},
				{
					source: `/:lang${langs}${routesBase[route]}:city${cities}`,
					has,
					destination: `${routesBase[route]}?lang=:lang&city=:city`,
				}
			)
		}

		definedRewrites[route] = rewrites
	}

	return definedRewrites
}

const rewrites = generateRewrites()
// console.log(rewrites);

const nextConfig = {
	async rewrites() {
		return [
			rewrites.home,
			rewrites.about,
			rewrites.services,
			rewrites.service,
			rewrites.portfolio,
			rewrites.project,
			rewrites.contacts,
		].flat(Infinity)
	},
	trailingSlash: true,
}

module.exports = nextConfig
