import React, { Component } from "react";
import Login from "./Login"
//import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <div className="border-init">
            <section>
              <div>
                <div className="container text-center py-5">
                  <h1 className="display-4">Bienvenido a PubliServ</h1>
                  <p className="lead">
                    Este es un lugar para publicar los servicios que ofreces,
                    Tambien puedes ver lo que otros han publicado es una
                    plataforma para ofrecer tus conocimientos y/o servicios
                  </p>
                  <hr />
                  🤠 👩‍💻 👨‍🏫 👨‍🎓 👨‍🍳 👩‍🌾 🕵️‍♂️ 👨‍⚕️ 👩‍🔧 👨‍🔬
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="col-6 border-init">
          <Login/>
        </div>
      </div>
    );
  }
}
