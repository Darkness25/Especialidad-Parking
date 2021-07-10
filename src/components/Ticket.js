import React from "react";
import { Link, useHistory } from "react-router-dom";

//redux
import {useDispatch} from 'react-redux';
import {obtenerTicketVer} from '../actions/ticketsActions';
import { uuid } from "uuidv4";

const Ticket = ({ ticket }) => {
  
  const dispatch = useDispatch();
  const history = useHistory(); 
  const { id, celda, imagen, placa, hora, categoria, precio } = ticket;

  const redireccionarVer = ticket =>{
      dispatch(obtenerTicketVer(ticket))
      
      history.push(`/ticketes/ver/${ticket.id}`)
  }

  const redireccionarEditar = ticket =>{
    dispatch(obtenerTicketVer(ticket))
    
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
         <h4 className="card-title">Celda Asignada: {celda}</h4>
        <p className="card-text">Categoria: {categoria}</p>
        <button 
          type="button"
          onClick={()=> redireccionarVer(ticket)}
          className="btn btn-primary text-center form-control">Ver mas</button>
          
      </div>
    </div>
  );
};

export default Ticket;
