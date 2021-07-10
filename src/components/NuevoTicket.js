import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {v4 as uuidv4} from "uuid";

//Actions de redux
import { crearNuevoTicketAction } from "../actions/ticketsActions";

//El history se tiene acceso cuando usamos react router dom
const NuevoTicket = ({ history }) => {
  //state del componente(Inicializo los componentes)
  const [celda, setCelda] = useState("");
  const [placa, setPlaca] = useState("");
  const [hora, setHora] = useState("");
  //const [imagen, setImagen] = useState("");
  const [categoria,setCategoria] = useState("");
  const [precio, setPrecio] = useState(0);

  //Utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();

  //Acceder al state del store por medio de useSelector
  const cargando = useSelector((state) => state.ticketes.loading);
  const error = useSelector((state) => state.ticketes.error);

  //Ahora usaremos redux se creara una funcion de redux que llame el action
  //Llama el action de productoAction
  const agregarTicket = (ticket) =>
    dispatch(crearNuevoTicketAction(ticket));

  //Cuando el uaurio haga submit
  const submitNuevoTicket = (e) => {
    e.preventDefault();

    //Validar formulario
    if (celda.trim() === "") {
      return;
    }
    //Valido para saber que imagen mandar

   

    let imagen = "";
    switch (categoria) {
        case "Motos":
            imagen = "https://miro.medium.com/max/1024/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg"
            break;
        case "Carros":
            imagen = "https://geeksroom.com/wp-content/uploads/2018/05/professional-services-home.jpg"
            break;
            }
    //Le mando el id
    let id = uuidv4();
    //Revisar errores

    //Crear el  ticket
    agregarTicket({
      id,
      celda,
      imagen,
      placa,
      hora,
      categoria,
      precio,
    });

    //Redirecciono al home o a la lista
    history.push("/ticketes");
  };

  const CalcularPrecio = () =>{

    let precioMoto=1000;
    let precioCarro=2000;

    if (categoria == "Motos") {
      return (precioMoto);
      
    } else {
     return precioCarro;
      
    }

  }

  return (
    <div className="row justify-content-center hero-image">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body text-center">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo ticket
            </h2>
            <form onSubmit={submitNuevoTicket}>
              <div className="form-group">
                <label>Celda </label>
                <input
                  type="text"
                  className="form-control "
                  name="celda"
                  value={celda}
                  onChange={(e) => setCelda(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Placa</label>
                <input
                  type="text"
                  className="form-control"
                  name="placa"
                  value={placa}
                  onChange={(e) => setPlaca(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Fecha y Hora de Ingreso</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="hora"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Categoria</label>
                <select  className="form-control" name="categoria"  value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                  <option></option>
                  <option value="Motos">Motos</option>
                  <option>Carros</option>                  
                </select>
              </div>
              <div className="form-group">
                <label>Precio por Hora</label>
                <input
                disabled="true"
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={CalcularPrecio()}
                  onChange={(e) => setPrecio(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>

            {cargando ? <p>Cargando..</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-2 text-centern">
                {" "}
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoTicket;
