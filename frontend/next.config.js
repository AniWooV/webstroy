/** @type {import('next').NextConfig} */

const routes = require("./settings/routes.json")

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
