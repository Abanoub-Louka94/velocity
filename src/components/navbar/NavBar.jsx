import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function NavBar() {
	const [isToggeld, setIsToggeld] = useState(false);

	const toggle = () => {
		setIsToggeld(!isToggeld);
	};
	return (
		<nav className="relative z-10">
			<section className="centered-container">
				<section className="flex-between h-[58px]">
					<section className="logo">
						<Link
							className="text-sky-500 uppercase tracking-[8px] font-thin text-2xl"
							to="/"
						>
							velocity
						</Link>
					</section>
					<section className="desktop-links hidden md:block">
						<ul className="w-auto flex gap-x-10">
							<li>
								<NavLink
									className="capitalize hover:text-sky-600 my-transition text-gray-800"
									to="/"
								>
									home
								</NavLink>
							</li>
							<li>
								<NavLink
									className="capitalize hover:text-sky-600 my-transition text-gray-800"
									to="/contact"
								>
									contact
								</NavLink>
							</li>
						</ul>
					</section>
					<section
						className={`mobile-links w-full z-1 bg-sky-600 absolute left-0 my-transition  md:hidden ${
							isToggeld ? "top-[58px] opacity-100" : "top-[-200%] opacity-0"
						}`}
					>
						<ul className="z-1">
							<li>
								<NavLink className="capitalize text-cyan-50 block p-4" to="/">
									home
								</NavLink>
							</li>
							<li>
								<NavLink
									className="capitalize text-cyan-50 block p-4"
									to="/contact"
								>
									contact
								</NavLink>
							</li>
						</ul>
					</section>
					<section
						className={`p-5 cursor-pointe md:hidden my-transition ${
							isToggeld ? "bg-sky-600" : undefined
						}`}
						onClick={toggle}
					>
						<section>
							<div className="bg-gray-500  w-5 h-1 rounded-xs"></div>
							<div className="bg-gray-500  w-5 h-1 rounded-xs my-1"></div>
							<div className="bg-gray-500  w-5 h-1 rounded-xs"></div>
						</section>
					</section>
				</section>
			</section>
		</nav>
	);
}
