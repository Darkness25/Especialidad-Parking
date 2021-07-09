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
                <label>Titulo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Titulo Ticket"
                  name="titulo"
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
                <label>Descripcion💬</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Breve descripción"
                  name="descripcion"
                />
              </div>
              <div className="form-group">
                <label>Contacto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contacto correo"
                  name="contacto"
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