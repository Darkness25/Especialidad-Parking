import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";


const Header = () => {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>Jesus Lara Sistema de Parqueadero</Link>

                
                {auth().currentUser ?
                    <div className="navbar-nav">
                    <Link className="nav-item nav-link mr-3 btn btn-outline-secondary " to={"/"}>Listado Tickets</Link>
                    &nbsp;
                    <Link className="nav-item nav-link mr-3 btn btn-outline-secondary " to={"/ticketes/nueva"}>Generar Tickets</Link>

                    
                        <span className="navbar-text mr-3 btn text-primary">Bienvenido - {auth().currentUser.email}</span>
                        
                        <button className="nav-item nav-link mr-3 btn btn-outline-secondary" onClick={() => auth().signOut()}>Cerrar Sesion</button>
                    </div> :
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link mr-3 btn btn-outline-secondary" to={"/"}>Iniciar Sesion</Link>
                        <Link className="nav-item nav-link mr-3 btn btn-outline-secondary" to={"/signup"}>Registrarse</Link>
                    </div>}
            </div>
        </nav>
        </div>
  );
};

export default Header;
