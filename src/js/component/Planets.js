import React, { Component } from "react";

export const Planets = () => (
	<div className="text-center mt-5">
		<h1 style={{ color: "#E16262" }}>{"Planets"}</h1>
		<div className="card" style={{ width: "18rem" }}>
			<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
			<div className="card-body ">
				<h5 className="card-title">{"Card title"}</h5>
				<p className="card-text">
					{"Some quick example text to build on the card title and make up the bulk of the card's content."}
				</p>

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
