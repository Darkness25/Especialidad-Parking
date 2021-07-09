import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPeopleFill } from "react-icons/bs";

const VerTicket = () => {
  //publicacion que traere de mi store
  const ticket = useSelector(
    (state) => state.ticketes.ticketobtener
  );

  const CalcularPrecio = () =>{
    if (categoria == "Motos") {
      return (precioMoto);
      
    } else {
     return precio;
      
    }

  }

  //Hago destructuring
  let precioMoto = 5000;
  const { celda, imagen, placa, hora, categoria, precio, id} =
  ticket;
  console.log(ticket);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card border-light mb-3">
            <div className="card-header">
              <h4 className="card-title text-center">{celda}</h4>
            </div>
            <div className="card-body">
              <img src={imagen} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div class="card text-white bg-primary mb-3">
            <div class="card-header"><h1>Contenido Ticket</h1></div>
            <div class="card-body">
              <h5>Placa Vehiculo:</h5>
              <p class="card-text">{placa}</p>
              <h5>Hora Ingreso:</h5>
              <p class="card-text">{hora}</p>
              <h5>Categoria:</h5>
              <p class="card-text">{categoria}</p>
              <p>
                Precio:   
              <strong>{CalcularPrecio()}$</strong>
              </p>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerTicket;
