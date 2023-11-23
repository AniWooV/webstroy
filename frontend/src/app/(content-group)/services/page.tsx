import { api } from "@/api/baseApi"

interface ServicesProps {
	params: {}
	searchParams: {
		lang: string
		city: string
		"default-locale": string
	}
}

async function Services(props: any) {
	const locale = props.searchParams.lang === ":lang" ? props.searchParams["default-locale"] : props.searchParams.lang
	// const response = await api.get(
	// 	`/services?locale=${locale}`
	// )

	console.log(props);
	

	const curentCity = props.searchParams.city || "Екб"

	return (
		<div>
			<h1>Services({curentCity}) :</h1>
				{/* {response.data.data.map((service: any, index: number) => (
					<div className="mx-2" key={index}>
						<div>{service.attributes.name}</div>
						<div>{service.attributes.description}</div>
					</div>
				))} */}
		</div>
	)
}

export default Services
