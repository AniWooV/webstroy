/** @type {import('next').NextConfig} */

const routesBase = require("./settings/routes-base.json")
const routesParams = require("./settings/routes-params.json")

function generateRewrites() {
	const definedRewrites = {}

	for (let route in routesBase) {
		const rewrites = []

		routesParams.forEach((params) => {
			const cities = `(${params.cities.join("|")})`
			const langs = `(${params.langs.join("|")})`

			const has = [{ type: "host", value: `(${params.subdomain}\..*)` }]

			rewrites.push(
				{
					source: `/:lang${langs}${routesBase[route]}`,
					has,
				},
				{
					source: `${routesBase[route]}/:city${cities}`,
					has,
				},
				{
					source: `/:lang${langs}${routesBase[route]}/:city${cities}`,
					has,
				}
			)
		})

		definedRewrites[route] = rewrites
	}

	return definedRewrites
}

const rewrites = generateRewrites()

const nextConfig = {
	async rewrites() {
		return [
			rewrites.home.map((rewrite) => {
				rewrite.destination = "/"

				return rewrite
			}),
			rewrites.about.map((rewrite) => {
				rewrite.destination = "/about/"

				return rewrite
			}),
			rewrites.services.map((rewrite) => {
				rewrite.destination = "/services/"

				return rewrite
			}),
			rewrites.service.map((rewrite) => {
				rewrite.destination = "/services/:slug/?lang=:lang&city=:city"

				return rewrite
			}),
			rewrites.portfolio.map((rewrite) => {
				rewrite.destination = "/portfolio/"

				return rewrite
			}),
			rewrites.project.map((rewrite) => {
				rewrite.destination = "/portfolio/:slug/?lang=:lang&city=:city"

				return rewrite
			}),
			rewrites.contacts.map((rewrite) => {
				rewrite.destination = "/contacts/?lang=:lang&city=:city"

				return rewrite
			}),
		].flat(Infinity)
	},
}

module.exports = nextConfig
