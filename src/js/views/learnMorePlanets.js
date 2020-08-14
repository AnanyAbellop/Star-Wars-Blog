import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const LearnMorePlanets = () => {
	const { store, actions } = useContext(Context);
	const { planet } = useParams();
	return (
		<div style={{ marginTop: "150px", margin: "auto" }}>
			<div className="card mb-3 mx-2 margin-auto justify-content-center" style={{ maxWidth: "75%" }}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src="https://via.placeholder.com/800x600" className="card-img" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{`${store.planets[planet].name}`}</h5>
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
					<p className="px-2">{`${store.planets[planet].name}`}</p>
				</div>
				<div className="col-2">
					<p className="px-2">{`Climate`}</p>
					<p className="px-2">{`${store.planets[planet].climate}`}</p>
				</div>
				<div className="col-2">
					<p className="px-2">{`Population`}</p>
					<p className="px-2">{`${store.planets[planet].population}`}</p>
				</div>
				<div className="col-2">
					<p className="px-2">{`Orbital Period`}</p>
					<p className="px-2">{`${store.planets[planet].orbital_period}`}</p>
				</div>
				<div className="col-2">
					<p>{`Rotation Period`}</p>
					<p>{`${store.planets[planet].rotation_period}`}</p>
				</div>
				<div className="col-2">
					<p className="px-2">{`Diameter`}</p>
					<p className="px-2">{`${store.planets[planet].diameter}`}</p>
				</div>
			</div>
		</div>
	);
};
