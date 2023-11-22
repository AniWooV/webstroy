import { api } from "@/api/baseApi"

interface ServicesProps {
	params: {}
	searchParams: {
		lang: string
		city: string
	}
}

async function Services({ params, searchParams }: ServicesProps) {
	// const response = await api.get(
	// 	`/services?locale=${searchParams.lang || "ru"}`
	// )

	return (
		<div>
			<h1>Services:</h1>
{/* 		{response.data.data.map((service: any, index: number) => (
				<div className="mx-2" key={index}>
					<div>{service.attributes.name}</div>
					<div>{service.attributes.description}</div>
				</div>
			))} */}
		</div>
	)
}

export default Services
