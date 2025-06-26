export default function Services() {
	return (
		<section className="py-30 bg-neutral-900">
			<section className="centered-container">
				<section className="text-center mb-13">
					<h2 className="uppercase tracking-[4px] text-3xl text-white mb-3.5 font-light">
						services
					</h2>
					<p className="uppercase tracking-[4px]  text-white">
						this is some text inside a div block
					</p>
				</section>
				<section className="grid grid-cols-1 gap-y-10 md:gap-y-0 md:grid-cols-9">
					<Card
						gridCols="md:col-start-1 md:col-end-4"
						imgSrc="/src/assets/service section images/biridge.jpg"
						imgTitle="birge"
						title="service one"
					/>
					<Card
						gridCols="md:col-start-7 md:col-end-10"
						imgSrc="/src/assets/service section images/person.jpg"
						imgTitle="person"
						title="service two"
					/>
				</section>
			</section>
		</section>
	);
}

function Card({ imgSrc, imgTitle, title, gridCols }) {
	return (
		<section className={`text-center ${gridCols}`}>
			<section className="w-full">
				<img
					className="block w-full object-cover"
					src={imgSrc}
					alt={imgTitle}
				/>
			</section>
			<section>
				<h3 className="uppercase tracking-[6px] text-xl text-white my-5 ">
					{title}
				</h3>
				<p className="text-white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					varius enim in eros elementum tristique.Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Suspendisse varius.
				</p>
			</section>
			<section className="mt-7">
				<button className="uppercase tracking-[3px] py-2 px-7 border-1 text-amber-50 border-amber50 hover:text-sky-500 hover:border-sky-500 my-transition cursor-pointer">
					learn more
				</button>
			</section>
		</section>
	);
}
