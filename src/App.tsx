import type { Component } from "solid-js";
import { css } from "../styled-system/css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Technology } from "./components/Technology";
import { Vision } from "./components/Vision";

const App: Component = () => {
	return (
		<div
			class={css({
				minHeight: "100vh",
				bg: "brand.dark",
			})}
		>
			<Hero />
			<Vision />
			<Services />
			<Technology />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
