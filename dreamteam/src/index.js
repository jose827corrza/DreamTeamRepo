import React from 'react';
import ReactDOM from 'react-dom'; // Librería react-dom 
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom
import './index.css';
 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
 
// Páginas del Sitio Web
import Home from './componentes/home/Home'; 
import Nosotros from './componentes/nosotros/Nosotros';
import Servicios from './componentes/servicios/Servicios';
import Contacto from './componentes/contacto/Contacto';
import Contratos from './componentes/contratos/Contratos';
import CrearContrato from './componentes/contratos/CrearContrato';
import EditarContrato from './componentes/contratos/EditarContrato';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router>
	    <div>
	    	<Switch>
 
		        {/* Páginas */}
		        <Route exact path='/' component={Home} />
		        <Route path='/nosotros' component={Nosotros} />
		        <Route path='/servicios' component={Servicios} /> 
		        <Route path='/contacto' component={Contacto} /> 
            <Route path='/contratos' component={Contratos} /> 
            <Route path='/crearContrato' component={CrearContrato} /> 
            <Route path='/editarContrato' component={EditarContrato} /> 
 
	      	</Switch>
	    </div>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.unregister();