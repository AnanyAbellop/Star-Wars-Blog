import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Characters = ({ people }) => {
	const { store, actions } = useContext(Context);
	return people.map((people, index) => {
		return (
			<div className="text-center mt-5 " key={index}>
				<div className="card" style={{ width: "18rem", marginRight: "3rem", height: "428px" }}>
					<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
					<div className="card-body ">
						<h5 className="card-title">{people.name}</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item text-wrap" style={{ border: "none" }}>{`Gender: ${
								people.gender
							}`}</li>
							<li className="list-group-item text-wrap" style={{ border: "none" }}>{`Hair Color: ${
								people.hair_color
							} `}</li>
							<li className="list-group-item text-wrap" style={{ border: "none" }}>{`Eye Color: ${
								people.eye_color
							} `}</li>
						</ul>
						<div className="card-footer d-flex" style={{ border: "none" }}>
							<Link to={"/learnMoreCharacter_copy/" + index} className="btn btn-primary mr-auto p-2">
								{"Learn more"}
							</Link>
							<span
								href="#"
								className="btn p-2 btn-outline-warning"
								style={{ color: "#FFF300", border: "#A2A1A1" }}
								onClick={() => actions.addFavorite(people.name)}>
								<i className="fas fa-heart" />
							</span>
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
