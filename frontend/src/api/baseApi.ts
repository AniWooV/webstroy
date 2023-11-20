import axios, { AxiosError } from "axios"
import { error } from "console"
import * as process from "process"

export const BASE_URL: string = process.env.BASE_URL || ""

export const api = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
})

function handleError(error: AxiosError) {
	const originalConfig = error.config

	if (error.response?.status === 400) {
		return Promise.reject(error)
	}
}

api.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => Promise.reject(error)
)

api.interceptors.response.use(
	(response) => response,
	(error) => handleError(error)
)
