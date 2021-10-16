
import React, { useMemo, useState, useEffect } from 'react';
import { useTable } from 'react-table';

import Table from 'react-bootstrap/Table';

import Menu from '../menu/Menu';
 
import Footer from '../footer/Footer';

import {Link } from "react-router-dom";

import { withRouter } from "react-router-dom";

//import './Slider.css';
 



class Contratos extends React.Component {

    isCreate = () => {
        var desarrollador = {nombre:"Felipe", accion:"Ingresa"}
        localStorage.setItem("desarrollador", JSON.stringify(desarrollador))
        this.props.history.push("/crearContrato");
     }

     onRowClick = (state, rowInfo, column, instance) => {
        return {
            onClick: e => {
                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowInfo)
                console.log('It was in this table instance:', instance)
            }
        }
    }

      

  render() {

	  var listaContratos =React.useMemo(
        () =>[
		  {
            codigoContrato: "AD7895",
            tipoIdentificacion: 1,
            numeroIdentificacion: "104567893",
            nombreCliente: "Puerto Santamarta",
            apellidoCliente: "MAgdalena",
            correoCliente: "puertosantamarta@gmail.com",
            numeroContactoCliente: "3125678905",
            nombreProyecto: "Desarrollo aplicacion web BARCOS",
            serviciosEscogidos: [1,2],
            precioProyecto: 300000,
            estado: "Aprobado",
            detalleProyecto:"Desarrollo de una aplicacion weeb con backend en Django y front con React Framework para la gestion de parqueo de barcos en el puerto de santamarta"            
        },
		  {
			codigoContrato: "AD8825",
            tipoIdentificacion: 2,
            numeroIdentificacion: "18293002838",
            nombreCliente: "SURA",
            apellidoCliente: "EPS",
            correoCliente: "suraeps@gmail.com",
            numeroContactoCliente: "309876253",
            nombreProyecto: "Analiosis de datos de salud SALUD+",
            serviciosEscogidos: [3,2],
            precioProyecto: 500000,
            estado: "Pendiente",
            detalleProyecto:"Desarrollo tablero de analisis para datos de salud de la eps SURA"
        },
		{
			codigoContrato: "AD9581",
            tipoIdentificacion: 3,
            numeroIdentificacion: "123432dds24dqw",
            nombreCliente: "CORONAPP",
            apellidoCliente: "Colombia",
            correoCliente: "coronap@gmail.com",
            numeroContactoCliente: "30232352342",
            nombreProyecto: "Desarrollo tablero de control datos covid COVICON",
            serviciosEscogidos: [1,3,2],
            precioProyecto: 503000,
            estado: "Terminado",
            detalleProyecto:"Desarrollo de un tablero para analisas los datos recolectados por la apolicacion CoronApp"
        }
	  ], [])

      const columns = React.useMemo(() => [
          {
              Header: "Codigo Contrato",
              accesor: "codigoContrato",
          },
        {
            Header: "Nombre Cliente",
            accesor: "nombreCliente",
        },
        {
            Header: "Apellido Cliente",
            accesor: "apellidoCliente",
        },
        {
            Header: "Correo Cliente",
            accesor: "correoCliente",
        },
        {
            Header: "Nombre Proyecto",
            accesor: "nombreProyecto",
        },
        {
            Header: "Estado",
            accesor: "estado",
        },
      ])

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, listaContratos })


      var desarrollador = {nombre:"Felipe", accion:""}

      
  	return (
          
        <>
        <Menu /><main role="main" className="flex-shrink-0 mt-5">
                <section className="text-center">
                    <div className="container">
                    <h1 className="tituloPagina">{desarrollador.nombre} aca tienes tus contratos</h1>
                    <button className="btn btn-primary" onClick={this.isCreate}>Nuevo contrato</button>
                    <div className="App">
                    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                        <thead>
                            {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    style={{
                                    borderBottom: 'solid 3px red',
                                    background: 'aliceblue',
                                    color: 'black',
                                    fontWeight: 'bold',
                                    }}
                                >
                                    {column.render('Header')}
                                </th>
                                ))}
                            </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                        padding: '10px',
                                        border: 'solid 1px gray',
                                        background: 'papayawhip',
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                    )
                                })}
                                </tr>
                            )
                            })}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </section>
                </main>
                    <Footer />
                    
                    </>

                    )

                    }

                    }

                    export default Contratos;