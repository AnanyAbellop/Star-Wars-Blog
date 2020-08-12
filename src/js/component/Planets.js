import React, { Component } from "react";
import PropTypes from "prop-types";

export const Planets = ({ planets }) =>
	planets.map((planets, index) => {
		return (
			<div className="text-center mt-5" key={index}>
				<div className="card" style={{ width: "18rem" }}>
					<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
					<div className="card-body ">
						<h5 className="card-title">{planets.name}</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item" style={{ border: "none" }}>{`Population: ${
								planets.population
							}`}</li>
							<li className="list-group-item" style={{ border: "none" }}>{`Terrain: ${
								planets.terrain
							} `}</li>
						</ul>
						<div className="card-footer d-flex" style={{ border: "none" }}>
							<a href="#" className="btn btn-primary mr-auto p-2">
								{"Learn more"}
							</a>
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
