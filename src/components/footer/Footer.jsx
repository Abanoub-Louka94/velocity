export default function Footer() {
	return (
		<footer className="py-10 bg-slate-200">
			<section className="centered-container">
				<section className="flex justify-between flex-col md:flex-row">
					<section className="w-full md:w-[30%]">
						<h3 className="uppercase text-neutral-700 mb-5">about velocity</h3>
						<p className="text-sm text-neutral-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique. Duis cursus,
							mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
							libero vitae erat.
						</p>
					</section>
					<section className="w-full md:w-[30%]">
						<h3 className="uppercase text-neutral-700 mb-5">useful links</h3>
						<ul>
							<UsefulLinks Title="Phasellus gravida semper nisi" />
							<UsefulLinks Title="Suspendisse nisl elit" />
							<UsefulLinks Title="Dellentesque habitant morbi" />
							<UsefulLinks Title="Etiam sollicitudin ipsum" />
						</ul>
					</section>
					<section className="w-full md:w-[30%]">
						<h3 className="uppercase text-neutral-700 mb-5">social</h3>
						<ul>
							<IconList
								imgSRc="/src/assets/footer/icons/twitter-black-shape.png"
								Title="twitter"
							/>
							<IconList
								imgSRc="/src/assets/footer/icons/facebook.png"
								Title="facebook"
							/>
							<IconList
								imgSRc="/src/assets/footer/icons/pinterest.png"
								Title="pinterest"
							/>
							<IconList
								imgSRc="/src/assets/footer/icons/google-plus-logo.png"
								Title="google"
							/>
						</ul>
					</section>
				</section>
			</section>
		</footer>
	);
}

function UsefulLinks({ Title }) {
	return (
		<li className="text-neutral-500 cursor-pointer mb-2 border-b-1 border-gray-400 pb-2.5 hover:text-sky-400 my-transition">
			{Title}
		</li>
	);
}

function IconList({ imgSRc, Title }) {
	return (
		<li className="flex items-center gap-x-3 not-last:mb-2">
			<img className="block w-[25px]" src={imgSRc} alt={Title} />
			<a
				className="text-neutral-500 w-full capitalize border-b-1 border-gray-400 pb-2.5 hover:text-sky-400 my-transition"
				href=""
				target="_blank"
			>
				{Title}
			</a>
		</li>
	);
}
