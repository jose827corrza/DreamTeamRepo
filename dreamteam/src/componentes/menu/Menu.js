import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Menu extends React.Component {
 
  render() {
 
  	return (
 
  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
 
		    <a className="navbar-brand barraNavegacion" href="#">DreamTeam</a>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">
			        <li className="nav-item active">
			          	<a className="nav-link" href="#">Inicio<span className="sr-only"></span></a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="#">Contacto</a>
			        </li>
			        <li className="nav-item">
			          	<Link className="nav-link" to="/servicios">Mis Servicios</Link>
			        </li>
					<li className="nav-item">
			          	<Link className="nav-link" to="/contratos">Mis Contratos</Link>
			        </li>
					<li className="nav-item">
			          	<a className="nav-link" href="#">Salir</a>
			        </li>
			    </ul>
		    </div>
 
		</nav>
 
  	)
    
  }
 
}
 
export default Menu;