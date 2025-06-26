export default function Form() {
	return (
		<section className="py-30">
			<section className="centered-container">
				<section className="text-center mb-13">
					<h2 className="uppercase tracking-[4px] text-3xl text-neutral-700 mb-3.5 font-light">
						contac us today
					</h2>
					<p className="uppercase tracking-[4px]  text-neutral-400">
						this is some text inside a div block
					</p>
				</section>
				<section className="md:w-[70%] mx-auto">
					<form>
						<input
							className="block w-full outline-none border-1 border-neutral-400 rounded-[5px] p-2 mb-4"
							type="text"
							name="text"
							placeholder="Enter your name..."
						/>
						<input
							className="block w-full outline-none border-1 border-neutral-400 rounded-[5px] p-2 mb-4"
							type="email"
							name="email"
							placeholder="Enter your email..."
						/>
						<textarea
							className="h-36 block w-full outline-none border-1 border-neutral-400 rounded-[5px] resize-none p-2 mb-4"
							name="message"
							placeholder="Message"
						></textarea>
						<input
							className="block w-full text-white uppercase text-center rounded-[5px] py-2 bg-sky-400 hover:bg-sky-500 my-transition"
							type="submit"
							value="send carrier pigeon"
						/>
					</form>
				</section>
			</section>
		</section>
	);
}
