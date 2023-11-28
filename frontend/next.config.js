/** @type {import('next').NextConfig} */

const routesBase = require("./settings/routes-base.json")
const routesParams = require("./settings/routes-params.json")

function generateRewrites() {
	const definedRewrites = {}

	for (let route in routesBase) {
		const rewrites = []

		for (let subdomain in routesParams) {
			const cities = routesParams[subdomain].cities.length ? `:city(${routesParams[subdomain].cities.join("|")})` : ""
			const langs = routesParams[subdomain].langs.length ? `/:lang(${routesParams[subdomain].langs.join("|")})` : ""
			const defaultCity = routesParams[subdomain]["default-city"] ? `&default-city=${routesParams[subdomain]["default-city"]}` : ""
			const defaultLang = routesParams[subdomain]["default-lang"] ? `&default-lang=${routesParams[subdomain]["default-lang"]}` : ""

			const has = []

			if (subdomain) {
				has.push({ type: "host", value: `(${subdomain}\..*)` })
			}

			rewrites.push(
				{
					source: `${langs}${routesBase[route]}`,
					has,
					destination: `${routesBase[route]}?lang=:lang${defaultLang}${defaultCity}`,
				},
				{
					source: `${routesBase[route]}${cities}`,
					has,
					destination: `${routesBase[route]}?city=:city${defaultLang}${defaultCity}`,
				},
				{
					source: `${langs}${routesBase[route]}${cities}`,
					has,
					destination: `${routesBase[route]}?lang=:lang&city=:city${defaultLang}${defaultCity}`,
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
