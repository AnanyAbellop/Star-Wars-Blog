import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Characters } from "../component/Characters";
import { Planets } from "../component/Planets";
import { Context } from "../store/appContext";
import React, { useContext } from "react";
export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div style={{ padding: "150px" }}>
			<div className="row mx-2">
				<h1 style={{ color: "#E16262" }}>{"Characters"}</h1>
				<div
					className="scrollmenu d-flex"
					style={{
						overflow: "auto",
						whiteSpace: "nowrap"
					}}>
					<Characters people={store.people} />
				</div>
			</div>
			<div className="row mx-2">
				<h1 style={{ color: "#E16262", marginTop: "50px" }}>{"Planets"}</h1>
				<div
					className="scrollmenu d-flex"
					style={{
						overflow: "auto",
						whiteSpace: "nowrap"
					}}>
					<Planets planets={store.planets} />
				</div>
			</div>
		</div>
	);
};
