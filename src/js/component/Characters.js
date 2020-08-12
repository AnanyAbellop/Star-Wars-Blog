import React, { Component } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useHistory, useRouteMatch, Link } from "react-router-dom";

export const Characters = ({ people }) => {
	// let history = useHistory();
	// let url = useRouteMatch();
	// console.log(url);
	people.map((people, index) => {
		return (
			<div className="text-center mt-5" key={index}>
				<div className="card" style={{ width: "18rem" }}>
					<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
					<div className="card-body ">
						<h5 className="card-title">{people.name}</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item" style={{ border: "none" }}>{`Gender: ${people.gender}`}</li>
							<li className="list-group-item" style={{ border: "none" }}>{`Hair Color: ${
								people.hair_color
							} `}</li>
							<li className="list-group-item" style={{ border: "none" }}>{`Eye Color:${
								people.eye_color
							} `}</li>
						</ul>
						<div className="card-footer d-flex" style={{ border: "none" }}>
							<Link to="/learnMoreCharacter">
								<a
									href="#"
									className="btn btn-primary mr-auto p-2"
									//onClick={e => {
									// 	history.push("/learnMoreCharacter");
									// 	 }}
								>
									{"Learn more"}
								</a>
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
};

Characters.propTypes = {
	people: PropTypes.array
};
