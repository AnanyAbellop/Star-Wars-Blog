//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap";
import Popper from "popper.js";
import jquery from "jquery";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
