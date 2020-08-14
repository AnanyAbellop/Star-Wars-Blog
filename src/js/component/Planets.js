import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Planets = ({ planets }) => {
	const { store, actions } = useContext(Context);
	return planets.map((planet, index) => {
		return (
			<div className="text-center mt-5" key={index}>
				<div className="card" style={{ width: "18rem", marginRight: "3rem", height: "428px" }}>
					<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{planet.name}</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item text-wrap" style={{ border: "none" }}>{`Population: ${
								planet.population
							}`}</li>
							<li className="list-group-item text-wrap" style={{ border: "none" }}>{`Terrain: ${
								planet.terrain
							} `}</li>
						</ul>
						<div className="card-footer d-flex" style={{ border: "none", bottom: "0px" }}>
							<Link to={"/learnMorePlanets/" + index} className="btn btn-primary mr-auto p-2">
								{"Learn more"}
							</Link>
							<span
								href="#"
								className="btn p-2 btn-outline-warning"
								style={{ color: "#FFF300", border: "#A2A1A1" }}
								onClick={() => actions.addFavorite(planet.name)}>
								<i className="fas fa-heart" />
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	});
};
Planets.propTypes = {
	planets: PropTypes.array
};
