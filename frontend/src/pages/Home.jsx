import React from "react";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";
import Hero from "../components/Hero";
const Home = () => {
	return (
		<>
			<Hero title={"Welcome to ZeeCare Medical Institute |Your trusted Health Care Provider"} imageUrl={"/hero.png"} />
			<Biography imageUrl={"/about.png"}/>
			<Departments />
			<MessageForm />
		</>
	);
};

export default Home;

//#4:09:45