import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Characters } from "../component/Characters";
import { Planets } from "../component/Planets";
import { Context } from "../store/appContext";
import React, { useContext } from "react";
export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="row mx-2">
				<h1 style={{ color: "#E16262" }}>{"Characters"}</h1>
				<Characters people={store.people} />
			</div>
			<div className="row mx-2">
				<h1 style={{ color: "#E16262" }}>{"Planets"}</h1>
				<Planets planets={store.planets} />
			</div>
		</>
	);
};
