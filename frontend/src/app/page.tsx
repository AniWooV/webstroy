import { api } from "@/api/baseApi"

interface HomeProps {
	params: {}
	searchParams: {
		city: string
		lang: string
	}
}

async function Home(props: HomeProps) {
    const response = await api.get("/posts")

    console.log(response.data);
	

	return <div>Home</div>
}

export default Home
