import React from "react";

const EditarTicket = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Ticket
            </h2>
            <form>
              <div className="form-group">
                <label>Celda</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Celda"
                  name="celda"
                />
              </div>
              <div className="form-group">
                <label>Imagen | Por el momento texto📸</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="URL de imagen"
                  name="imagen"
                />
              </div>
              <div className="form-group">
                <label>Placa del Vehiculo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Placa"
                  name="placa"
                />
              </div>
              <div className="form-group">
                <label>Fecha y Hora de Ingreso</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contacto correo"
                  name="hora"
                />
              </div>
              <div className="form-group">
                <label>Precio</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Editar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarTicket;