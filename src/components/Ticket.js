import React from "react";
import { Link, useHistory } from "react-router-dom";

//redux
import {useDispatch} from 'react-redux';
import {obtenerTicketVer} from '../actions/ticketsActions';

const Ticket = ({ ticket }) => {
  
  const dispatch = useDispatch();
  const history = useHistory(); //Me permite redireccionar y tener un historial
  const { id, celda, imagen, placa, hora, categoria, precio } = ticket;

  //Funcion que redirige de forma programada
  const redireccionarVer = ticket =>{
      dispatch(obtenerTicketVer(ticket))
      //Lo que hace es que cuando de en el clic siempre me tome el elemento que estoy llamando
      history.push(`/ticketes/ver/${ticket.id}`)
  }
  return (
    <div className="card border-primary mb-3 card-w container">
      <div className="card-header">
        <img
          src={imagen}
          className="img-fluid"
        />
      </div>

      <div className="card-body">
        <h4 className="card-title">{celda}</h4>
        <p className="card-text">{placa}</p>
        <button 
          type="button"
          onClick={()=> redireccionarVer(ticket)}
          className="btn btn-primary text-center form-control">Ver mas</button>
      </div>
    </div>
  );
};

export default Ticket;
