import AboutSection from "../../components/about section/AboutSection";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import Services from "../../components/services section/Services";
import Tab from "../../components/tab section/tab";

export default function Home() {
	return (
		<main>
			<NavBar />
			<Header />
			<AboutSection />
			<Services />
			<Tab />
			<Footer />
		</main>
	);
}
