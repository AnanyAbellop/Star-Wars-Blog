import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

//import "../../styles/demo.scss";

export const LearnMoreCharacters = () => {
	const { store, actions } = useContext(Context);
	const { character } = useParams();

	return (
		<div>
			<div className="card mb-3 mx-2 margin-auto justify-content-center" style={{ maxWidth: "75%" }}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src="https://via.placeholder.com/800x600" className="card-img" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{`${store.people[character].name}`}</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
						</div>
					</div>
				</div>
			</div>
			<hr style={{ border: "1px solid red", maxWidth: "95%" }} />
			<div className="row mx-2 text-center" style={{ color: "red" }}>
				<div className="col-2">
					<p className="px-2">{`Name`}</p>
					<p className="px-2">{`${store.people[character].name}`}</p>
				</div>
				<div className="col-2">
					<p className="px-2">{`Birth Year`}</p>
					<p className="px-2">{`${store.people[character].birth_year}`}</p>
				</div>
				<div className="col-2">
					<p className="px-2">{`Gender`}</p>
					<p className="px-2">{`${store.people[character].gender}`}</p>
				</div>
				<div className="col-2">
					<p className="px-2">{`Height`}</p>
					<p className="px-2">{`${store.people[character].height}`}</p>
				</div>
				<div className="col-2">
					<p>{`Skin Color`}</p>
					<p>{`${store.people[character].skin_color}`}</p>
				</div>
				<div className="col-2">
					<p className="px-2">{`Eye Color`}</p>
					<p className="px-2">{`${store.people[character].eye_color}`}</p>
				</div>
			</div>
		</div>
	);
};
