import { api } from "@/api/baseApi"

interface HomeProps {
	params: {}
	searchParams: {
		city: string
		lang: string
	}
}

async function Home(props: HomeProps) {

	console.log(props);
	
	return <div>Home</div>
}

export default Home
