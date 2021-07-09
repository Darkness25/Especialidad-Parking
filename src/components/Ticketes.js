import React, { Fragment, useEffect } from "react";
import Ticket from "./Ticket";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerTicketesAction } from "../actions/ticketsActions";

const Ticketes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Consultar la Api o laP base de datos
    const cargarTicketes = () => dispatch(obtenerTicketesAction());
    cargarTicketes();
  }, []);

  //Vamos a obtener el state
  const ticketes = useSelector(
    (state) => state.ticketes.ticketes
  );
  const error = useSelector((state) => state.ticketes.error);
  const cargando = useSelector((state) => state.ticketes.loading);

  return (
    <Fragment>
      <h2 className="text-center my-5"> Listado de Ticketes</h2>

      {error ? <p className="alert-danger text-center">Hubo un error</p> : null}
      {cargando ? <p className="text-center">Cargando..</p> : null}
    <div className="container">
      <div className="row">
        <div className="card-columns">
          {publicaciones.length === 0
            ? "No hay registros"
            : ticketes.map((ticket) => (
                <Ticket key={ticket.id} ticket={ticket} />
              ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Ticketes;
