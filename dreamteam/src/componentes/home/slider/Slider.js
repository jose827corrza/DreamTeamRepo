
import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

//import './Slider.css';
 
class Slider extends React.Component {
 
  render() {
	  var listaDesarrolladoresDestacados =[
		  {
			  nombre: "Nelson Felipe Barco",
			  descripcion: "Desarrollador FullStack e Ingeniero de datos. 2 Años exp",
			  imagen: "https://avatars.githubusercontent.com/u/48741234?v=4"
		  },
		  {
			nombre: "Rodrigo",
			descripcion: "Desarrollador Backend. 2 años exp",
			imagen: "https://avatars.githubusercontent.com/u/84426110?v=4"
		},
		{
			nombre: "Jose Corrza",
			descripcion: "Desarrollador. 1 año exp",
			imagen: "https://avatars.githubusercontent.com/u/48741234?v=4"
		}
	  ]
 
  	return (
		<Carousel variant="dark" className="carrusel">
		{
			listaDesarrolladoresDestacados.map(desarrollador =>{
				return(
					<Carousel.Item>
					<img
					  className="d-block w-100"
					  src={desarrollador.imagen}
					  alt="First slide"
					/>
					<Carousel.Caption>
					  <h3>{desarrollador.nombre}</h3>
					  <p>{desarrollador.descripcion}</p>
					</Carousel.Caption>
				  </Carousel.Item>
				)
			})
		}
		
		</Carousel>
 
  	)
    
  }
 
}
 
export default Slider;