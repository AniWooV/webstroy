"use client"

import { ChildrenParams } from "@/interfaces/params"
import Link from "next/link"
import { useEffect, useState } from "react"

interface HeaderProps extends ChildrenParams {}

function Header(props: HeaderProps) {
	const [navBase, setNavBase] = useState<string[]>([])

	useEffect(() => {
		if (props.lang) {
			localStorage.setItem("lang", props.lang)
		} else {
			localStorage.removeItem("lang")
		}
		if (props.city) {
			localStorage.setItem("city", props.city)
		} else {
			localStorage.removeItem("city")
		}

		if (localStorage.length > 0) {
			setNavBase([
				localStorage.getItem("lang")
					? `/${localStorage.getItem("lang")}`
					: "",
				"",
				localStorage.getItem("city")
					? `${localStorage.getItem("city")}/`
					: "",
			])
		}
	}, [])

	const navLinks = [
		{
			name: "Главная",
			baseHref: "/",
			static: false,
		},
		{
			name: "О нас",
			baseHref: "/about/",
			static: true,
		},
		{
			name: "Услуги",
			baseHref: "/services/",
			static: false,
		},
		{
			name: "Портфолио",
			baseHref: "/portfolio/",
			static: true,
		},
		{
			name: "Контакты",
			baseHref: "/contacts/",
			static: false,
		},
	]

	return (
		<header className="m-2">
			<nav>
				{navLinks.map((link, index) => {
					navBase[1] = link.baseHref

					console.log(navBase.join(""))

					if (link.static) {
						return (
							<Link
								key={index}
								href={navBase.slice(0, 2).join("")}
								className="m-2"
							>
								{link.name}
							</Link>
						)
					}

					return (
						<Link key={index} href={navBase.join("")}>
							{link.name}
						</Link>
					)
				})}
			</nav>
		</header>
	)
}

export default Header
