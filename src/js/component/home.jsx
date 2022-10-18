import React from "react";
import Navbar from "./Navbar.jsx"
import Jumbo from "./Jumbo.jsx"
import Card from "./Card.jsx"
import Footer from "./Footer.jsx"
import Contact from "./Contact.jsx"
import Video from "./Video.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbo />
			<Card />
			<Video />
			<Contact/>
			<Footer />
		</div>
	);
};

export default Home;
