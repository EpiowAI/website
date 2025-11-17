import type { Component } from "solid-js";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Technology } from "./components/Technology";
import { Vision } from "./components/Vision";

const App: Component = () => {
	return (
		<>
			<Hero />
			<Vision />
			<Services />
			<Technology />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
