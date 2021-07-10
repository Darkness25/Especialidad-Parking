import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPeopleFill } from "react-icons/bs";

const VerTicket = () => {
  //publicacion que traere de mi store
  const ticket = useSelector(
    (state) => state.ticketes.ticketobtener
  );

  

  

  //Hago destructuring
  
  const { celda, imagen, placa, hora, categoria, precio, id} =
  ticket;
  console.log(ticket);



  const CalcularPrecio = () =>{

    let precioMoto=1000;
    let precioCarro=2000;

    if (categoria == "Motos") {
      return (precioMoto);
      
    } else {
     return precioCarro;
      
    }

  }

  function imprimirS(){

    var ficha = document.getElementById(2);
	  var ventimp = window.open(' ', 'popimpr');
	  ventimp.document.write( ficha.innerHTML );
	  ventimp.document.close();
	  ventimp.print( );
	  ventimp.close();

  }

  return (
    <div className="container">
      <div className="row">

      <div className="col-6">
          <div class="card text-white bg-dark mb-3">
            <div class="card-header" id="3"><h1>Ticket Ingreso</h1></div>
            <div class="card-body" id="2">
              <h5>Placa Vehiculo:</h5>
              <p class="card-text">{placa}</p>
              <h5>Celda:</h5>
              <p class="card-text">{celda}</p>
              <h5>Hora Ingreso:</h5>
              <p class="card-text">{hora}</p>
              <h5>Categoria:</h5>
              <p class="card-text">{categoria}</p>
              <p>
                Precio Por Hora: 
                <br />  
              <strong>{CalcularPrecio()}$</strong>
              </p>                       
               
              
            </div>
            <button className="btn btn-primary " onClick={()=> imprimirS()}>Imprimir</button>
            

            
          </div>
        </div>
        <div className="col-6">
          <div className="card border-light mb-3">
            <div className="card-header">
              <h4 className="card-title text-center">Celda Asignada: {celda}</h4>
            </div>
            <div className="card-body" id="12">
              <img src={imagen} className="img-fluid" />
              
            </div>
            
          </div>
          
        </div>
        
      </div>


    </div>
  );
};

export default VerTicket;
