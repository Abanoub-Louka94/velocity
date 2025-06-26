export default function Header() {
	return (
		<header className="py-40 md:py-80 bg-[url(./components/header/images/header.jpg)] bg-center bg-cover bg-cyan-700 bg-blend-overlay border-b-sky-500 border-b-4 border-sky-600">
			<section className="text-center">
				<h1 className="uppercase text-4xl md:text-6xl text-amber-50 tracking-[7px]">
					this is velocity
				</h1>
				<p className="uppercase text-2xl tracking-[7px] text-sky-500 my-7">
					a free responsive template by webflow
				</p>
				<section className="flex flex-col mx-auto w-fit gap-y-5 md:flex-between md:w-90 md:flex-row">
					<button className="uppercase text-amber-50 tracking-[3px] bg-sky-400 py-2 px-7 hover:bg-sky-500 my-transition cursor-pointer">
						sign in
					</button>
					<button className="uppercase tracking-[3px] py-2 px-7 border-1 text-amber-50 border-amber50 hover:text-sky-500 hover:border-sky-500 my-transition cursor-pointer">
						learn more
					</button>
				</section>
			</section>
		</header>
	);
}
