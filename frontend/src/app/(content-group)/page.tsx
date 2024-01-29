import { getTitles } from "@/api/titles";
import { Metadata, ResolvingMetadata } from "next";

// export async function generateMetadata(props: any, parent: ResolvingMetadata): Promise<Metadata> {
// 	const titles = await getTitles("home-page")

// 	const lang = props.searchParams.lang || props.searchParams["default-lang"]

// 	let title = ""

// 	if (lang === titles.locale) {
// 		title = titles.title
// 	} else {		
// 		title = titles.localizations.data.find(title => {			
// 			return title.attributes.locale === lang}).attributes.title		
// 	}

// 	return {
// 		title: title
// 	}
// }

function Home(props: any) {
	console.log(props);
	

	return ( <div>Home</div> );
}

export default Home;
