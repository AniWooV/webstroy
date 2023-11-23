import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

interface LayoutProps {
	children: React.ReactNode,
}

function Layout(props: LayoutProps) {	
	return (
		<>
			{props.children}
		</>
	)
}

export default Layout
