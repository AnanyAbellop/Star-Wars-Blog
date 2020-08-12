import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Characters } from "../component/Characters";
import { Planets } from "../component/Planets";
export const Home = () => (
	<>
		<div className="row">
			<Characters />
		</div>
		<div className="row">
			<Planets />
		</div>
	</>
);
