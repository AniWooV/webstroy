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

			const has = [{type: "host", value: `(${params.subdomain}\..*)`}]

			rewrites.push(
				{
					source: `/:lang${langs}${routesBase[route]}`,
					has,
				},
				{
					source: `${routesBase[route]}/:city${cities}`,
					has
				},
				{
					source: `/:lang${langs}${routesBase[route]}/:city${cities}`,
					has
				},
			)
		})

		definedRewrites[route] = rewrites
	}

	return definedRewrites
}

// const rewrites = generateRewrites()
// console.log(rewrites);

const nextConfig = {
	async rewrites() {
		// return [
		// 	routes.home.map((rewrite) => {
		// 		rewrite.destination = "/"

		// 		return rewrite
		// 	}),
		// 	routes.about.map((rewrite) => {
		// 		rewrite.destination = "/about/"

		// 		return rewrite
		// 	}),
		// 	routes.services.map((rewrite) => {
		// 		rewrite.destination = "/services/"

		// 		return rewrite
		// 	}),
		// 	routes.service.map((rewrite) => {
		// 		rewrite.destination = "/services/:slug/?lang=:lang&city=:city"
		// 		console.log(rewrite);
		// 		return rewrite
		// 	}),
		// 	routes.portfolio.map((rewrite) => {
		// 		rewrite.destination = "/portfolio/"

		// 		return rewrite
		// 	}),
		// 	routes.project.map((rewrite) => {
		// 		rewrite.destination = "/portfolio/:slug/?lang=:lang&city=:city"

		// 		return rewrite
		// 	}),
		// 	routes.contacts.map((rewrite) => {
		// 		rewrite.destination = "/contacts/?lang=:lang&city=:city"

		// 		return rewrite
		// 	})
		// ].flat(Infinity)

		// =========================================================================
		
		return[
			{
				source: "/:lang(ru|en)/services",
				has: [{
					type: "host",
					value: "(ekb\..*)"
				}],
				destination: "/services/?lang=:lang&city=:city",
			},
			{
				source: "/services/:city(perm|irbit)",
				has: [{
					type: "host",
					value: "(ekb\..*)"
				}],
				destination: "/services/?lang=:lang&city=:city",
			},
			{
				source: "/:lang(ru|en)/services/:city(perm|irbit)",
				has: [{
					type: "host",
					value: "(ekb\..*)"
				}],
				destination: "/services/?lang=:lang&city=:city",
			},
			{
				source: "/:lang(ru|en)/services/:slug(.*-.*)",
				has: [{
					type: "host",
					value: "(ekb\..*)"
				}],
				destination: "/services/:slug/?lang=:lang&city=:city",
			},
			{
				source: "/services/:slug(.*-.*)/:city(perm|irbit)",
				has: [{
					type: "host",
					value: "(ekb\..*)"
				}],
				destination: "/services/:slug/?lang=:lang&city=:city",
			},
			{
				source: "/:lang(ru|en)/services/:slug(.*-.*)/:city(perm|irbit)",
				has: [{
					type: "host",
					value: "(ekb\..*)"
				}],
				destination: "/services/:slug/?lang=:lang&city=:city",
			},
			{
				source: "/:lang(ru|en)/services",
				has: [{
					type: "host",
					value: "(zab\..*)"
				}],
				destination: "/services/?lang=:lang&city=:city",
			},
			{
				source: "/services/:city(chita|kr-kam)",
				has: [{
					type: "host",
					value: "(zab\..*)"
				}],
				destination: "/services/?lang=:lang&city=:city",
			},
			{
				source: "/:lang(ru|en)/services/:city(chita|kr-kam)",
				has: [{
					type: "host",
					value: "(zab\..*)"
				}],
				destination: "/services/?lang=:lang&city=:city",
			}
			
		] 
	},
}

module.exports = nextConfig