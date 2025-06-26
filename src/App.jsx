import { Route, Routes } from "react-router";
import Home from "./Pages/Home Page/Home";
import Contact from "./Pages/contac page/Contact";
import TapOne from "./components/tap-1 section/TapOne";
import TapTwo from "./components/tap-2 section/TapTwo";
import TapThree from "./components/tap-3 section/TapThree";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route index element={<TapOne />} />
				<Route path="tab-2" element={<TapTwo />} />
				<Route path="tab-3" element={<TapThree />} />
			</Route>
			<Route path="contact" element={<Contact />} />
		</Routes>
	);
}

export default App;
