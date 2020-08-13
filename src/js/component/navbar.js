import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 " href="#">
					<img
						src="data:image/png;base64,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"
						width="70"
						height="50"
						className="d-inline-block align-top"
						alt=""
						loading="lazy"
					/>
				</span>
			</Link>
			<div className="dropdown">
				<button
					className="nav-link dropdown-toggle btn  btn-primary"
					id="navbarDropdownMenuLink"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					{store.favorites.map((favorite, index) => {
						return (
							<span className="dropdown-item disabled" key={index} href="#">
								{favorite}
								<div onClick={() => actions.removeFavorite(index)}>
									<i className="fas fa-trash float-right" />
								</div>
							</span>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
