import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle } from "../helpers/auth";
import { BsFillPeopleFill} from "react-icons/bs";
import {FaGoogle} from "react-icons/fa"



export default class Login extends Component {
  constructor() {
    super();
    this.state = {
        error: null,
        email: "",
        password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    
}

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
}

async handleSubmit(event) {
    event.preventDefault();
    this.setState({error: ""});
    try {
        await signin(this.state.email, this.state.password);
    } catch (error) {
        this.setState({error: error.message});
    }
}

async googleSignIn() {
    try {
        await signInWithGoogle();
    } catch (error) {
        this.setState({error: error.message});
    }
}





render() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className={"col-md-3"} />
                <div className="col-md-6">
                    <form
                        className="py-5 px-5 content-align-center"
                        autoComplete="off"
                        onSubmit={this.handleSubmit}>
                        <h1 className={"m-5"}>Inicio de Sesion <br />< BsFillPeopleFill/></h1>
                        <button className="btn btn-danger mr-2" type="button" onClick={this.googleSignIn}>
                            Iniciar con Google <FaGoogle />
                        </button>                            
                        <p className="lead m-3"> O <br /> Inicia Sesion con tu Correo y Contraseña</p>
                        <hr/>
                        <div className="form-group">
                            <input
                                className="form-control text-center"
                                placeholder="Correo Electronico"
                                name="email"
                                type="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                required={true}
                                minLength={15}
                                maxLength={40}/>
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                className="form-control text-center"
                                placeholder="Contraseña"
                                name="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                                type="password"
                                required={true}
                                minLength={8}
                                maxLength={20}/>
                        </div>
                        <div className="form-group">
                            {this.state.error ? (<p className="text-danger">{this.state.error}</p>) : null}

                            <br />
                            <button className="btn btn-primary px-5" type="submit">Iniciar Sesion</button>
                        </div>
                        <hr/>
                        <p>No tienes una cuenta? <Link to="/signup">Click aqui para registrarse</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
}
