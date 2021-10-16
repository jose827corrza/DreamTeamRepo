import React from 'react';

import Menu from '../menu/Menu';
 
import Footer from '../footer/Footer';
 
class EditarContrato extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      tipoIdentificacion:"",
      numeroIdentificacion:"",
      nombreCliente:"",
      apellidoCliente:"",
      correoCliente:"",
      numeroContactoCliente:"",
      nombreProyecto:"",
      serviciosEscogidos:"",
      precioProyecto:""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log()
  }

  handleSubmit(e) {
    this.contrato = {
      tipoIdentificacion: this.state.tipoIdentificacion,
      numeroIdentificacion: this.state.numeroIdentificacion,
      nombreCliente: this.state.nombreCliente,
      apellidoCliente: this.state.apellidoCliente,
      correoCliente: this.state.correoCliente,
      numeroContactoCliente: this.state.numeroContactoCliente,
      nombreProyecto: this.state.nombreProyecto,
      serviciosEscogidos: this.state.serviciosEscogidos,
      precioProyecto:this.state.precioProyecto,
      detalleProyecto: this.state.detalleProyecto,
      estado:"Pendiente"
    }

    alert(
      "Tu contrato con " + this.contrato.nombreCliente + " " + this.contrato.apellidoCliente + " para realizar el proyecto "
      + this.contrato.nombreProyecto + " ha sido registrado exitosamente por un precio de " + this.contrato.precioProyecto + "Esta en estado " +  this.contrato.estado + " y a espera de revisión del administrador" 
    )
    e.preventDefault();

    this.props.history.push("/crearContrato");
    
 }

  render() {
     
      var tipoIdentifiacionLista = 
      [
        {nombre: "Cedula Ciudadania", id:1},
        {nombre:"Tarjeta Identidad", id:2},
        {nombre:"Cedula Extranjeria", id:3},
        {nombre:"Pasaporte", id:4}
      ]
      var serviciosOfrecidos = [
        {nombre:"desarrollo backend python - django", id:1}, 
        {nombre:"desarrollo fronted javascript - React", id:2},
        {nombre:"desarrollo bases de datos postgresql", id:3}
      ]
      var desarrollador = JSON.parse(localStorage.getItem("desarrollador"))
      if (desarrollador.accion == "Ingresa"){
      }
        

    return (
        <>
        <Menu /><main role="main" className="flex-shrink-0 mt-5">
                <section className="text-center">
                    <div className="container">
                    <h1 className="tituloPagina">{desarrollador.nombre} {desarrollador.accion} tu contrato</h1>
        <form className="mb-5" onSubmit={this.handleSubmit}>

        <div className="form-group">
            <label htmlFor="nya" className="negrita">Tipo de identificacion</label>
            <select name="tipoIdentificacion" id="tipoIdentificacion" name="tipoIdentificacion" value={this.state.tipoIdentificacion} onChange={this.handleInputChange} >
                {
                    tipoIdentifiacionLista.map(identificacion =>{
                        return(
                            <option value={identificacion.id}>{identificacion.nombre}</option>
                        )
                    })
                }
            </select>            
        </div>    
        
          <div className="form-group">
            <label htmlFor="nya" className="negrita">Numero identifiación</label>
            <input type="text" className="form-control" id="numeroIdentificacion" name="numeroIdentificacion" value={this.state.numeroIdentificacion} onChange={this.handleInputChange} required />            
          </div>

          <div className="form-group">
            <label htmlFor="nya" className="negrita">Nombre Cliente</label>
            <input type="text" className="form-control" id="nombreCliente" name="nombreCliente" value={this.state.nombreCliente} onChange={this.handleInputChange} required  />            
          </div>

          <div className="form-group">
            <label htmlFor="nya" className="negrita">Apellido Cliente</label>
            <input type="text" className="form-control" id="apellidoCliente" name="apellidoCliente" value={this.state.apellidoCliente} onChange={this.handleInputChange} required />            
          </div>

          <div className="form-group">
            <label htmlFor="nya" className="negrita">Correo Cliente</label>
            <input type="text" className="form-control" id="correoCliente" name="correoCliente" value={this.state.correoCliente} onChange={this.handleInputChange} required  />            
          </div>

          <div className="form-group">
            <label htmlFor="nya" className="negrita">Numero contacto Cliente</label>
            <input type="text" className="form-control" id="numeroContactoCliente" name="numeroContactoCliente" value={this.state.numeroContactoCliente} onChange={this.handleInputChange} required />            
          </div>

          <div className="form-group">
            <label htmlFor="nya" className="negrita">Nombre Proyecto</label>
            <input type="text" className="form-control" id="nombreProyecto" name="nombreProyecto" value={this.state.nombreProyecto} onChange={this.handleInputChange} required  />            
          </div>

          <div className="form-group">
            <label htmlFor="nya" className="negrita">Servicios requeridos</label>
            <select name="serviciosOfrecidos" id="serviciosOfrecidos" name="serviciosOfrecidos" value={this.state.serviciosOfrecidos} onChange={this.handleInputChange} required   multiple>
                {
                    serviciosOfrecidos.map(servicio =>{
                        return(
                            <option value={servicio.id}>{servicio.nombre}</option>
                        )
                    })
                }
            </select>            
        </div>  

        <div className="form-group">
            <label htmlFor="nya" className="negrita">Precio acordado Proyecto</label>
            <input type="text" className="form-control" id="precioProyecto" name="precioProyecto" value={this.state.precioProyecto} onChange={this.handleInputChange} required  />            
        </div>

        <div className="form-group">
            <label htmlFor="nya" className="negrita">Detalles del proyecto</label>
            <input type="text" className="form-control" id="detalleProyecto" name="detalleProyecto" value={this.state.detalleProyecto} onChange={this.handleInputChange} required  />            
          </div>  
 
 
          <input type="submit" value="Submit" />
 
        </form>

        </div>
                </section>
                </main>
                    <Footer />
                    
                    </>
 
    )
    
  }
 
}
 
export default EditarContrato;