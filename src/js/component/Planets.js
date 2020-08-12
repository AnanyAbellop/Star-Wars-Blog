import React, { Component } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Planets = ({ planets }) =>
	planets.map((planet, index) => {
		return (
			<div className="text-center mt-5" key={index}>
				<div className="card" style={{ width: "18rem" }}>
					<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
					<div className="card-body ">
						<h5 className="card-title">{planet.name}</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item" style={{ border: "none" }}>{`Population: ${
								planet.population
							}`}</li>
							<li className="list-group-item" style={{ border: "none" }}>{`Terrain: ${
								planet.terrain
							} `}</li>
						</ul>
						<div className="card-footer d-flex" style={{ border: "none" }}>
							<Link to={"/learnMorePlanets/" + index} className="btn btn-primary mr-auto p-2">
								{"Learn more"}
							</Link>
							<a
								href="#"
								className="btn btn-light p-2 btn-outline-dark"
								style={{ color: "yellow", border: "yellow" }}>
								<i className="fas fa-heart" />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	});

Planets.propTypes = {
	planets: PropTypes.array
};
