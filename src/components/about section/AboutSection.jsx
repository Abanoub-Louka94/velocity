export default function AboutSection() {
	return (
		<section className="py-30">
			<section className="centered-container">
				<section className="text-center mb-13">
					<h2 className="uppercase tracking-[4px] text-3xl text-neutral-700 mb-3.5 font-light">
						what we do
					</h2>
					<p className="uppercase tracking-[4px]  text-neutral-400">
						this is some text inside a div block
					</p>
				</section>
				<section className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<Card
						imgSrc="/src/assets/about section images/clock.png"
						imgTitle="clock"
						title="graphic design"
					/>
					<Card
						imgSrc="/src/assets/about section images/code.png"
						imgTitle="code"
						title="awesome code"
					/>
					<Card
						imgSrc="/src/assets/about section images/mockup.png"
						imgTitle="template"
						title="free template"
					/>
				</section>
			</section>
		</section>
	);
}

function Card({ imgSrc, title, imgTitle }) {
	return (
		<section className="shadow-xl py-9 px-2 text-center">
			<section className="border-sky-500 border-2 p-2 rounded-full w-[40%] mx-auto mb-5">
				<img className="block" src={imgSrc} alt={imgTitle} />
			</section>
			<section>
				<h3 className="uppercase tracking-[4px] text-xl text-neutral-700 mb-3.5 font-light">
					{title}
				</h3>
				<p className="text-neutral-400">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					varius enim in eros elementum tristique.
				</p>
			</section>
		</section>
	);
}
