import { NavLink, Outlet } from "react-router";

export default function Tab() {
	return (
		<section className="taps py-30">
			<section className="centered-container">
				<section>
					<ul className="nav-taps flex-between w-[80%] mx-auto mb-15 flex-col gap-y-10 md:flex-row xl:w-[50%]">
						<li>
							<NavLink
								className="uppercase tracking-[3px] py-2 px-7 rounded-[5px] text-white opacity-70 bg-slate-500 hover:bg-sky-600 hover:opacity-100 my-transition"
								to="/"
							>
								tab button 1
							</NavLink>
						</li>
						<li>
							<NavLink
								className="uppercase tracking-[3px] py-2 px-7 rounded-[5px] text-white opacity-70 bg-slate-500 hover:bg-sky-600 hover:opacity-100 my-transition"
								to="/tab-2"
							>
								tab button 2
							</NavLink>
						</li>
						<li>
							<NavLink
								className="uppercase tracking-[3px] py-2 px-7 rounded-[5px] text-white opacity-70 bg-slate-500 hover:bg-sky-600 hover:opacity-100 my-transition"
								to="/tab-3"
							>
								tab button 3
							</NavLink>
						</li>
					</ul>
				</section>
				<Outlet />
			</section>
		</section>
	);
}
