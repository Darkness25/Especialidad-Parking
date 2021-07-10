import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { signup } from "../helpers/auth";
import { signup, signInWithGoogle } from "../helpers/auth";
import { BsFillPeopleFill } from "react-icons/bs";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="container text-center hero-image">
            <div className="row">
            <div className={"col-md-3"} />
               <div className="col-md-7">
               <div className="containerAR">
                <form className="mt-2 py-5 px-5 content-align-center" onSubmit={this.handleSubmit}>
                   <strong> <h1 className="text">
                    Registrate en Sistema de Parqueadero <br />
                    
                        
                    </h1>
                    
                    <p className="lead text-white">Por favor ingresa tu Correo y Contraseña</p> </strong>
                    <div className="form-group">
                        <input className="form-control text-center"
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
                        <input className="form-control text-center"
                               placeholder="Contraseña"
                               name="password"
                               onChange={this.handleChange}
                               value={this.state.password} type="password"
                               required={true}
                               minLength={8}
                               maxLength={20}/>
                    </div>
                    <div className="form-group">
                        {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
                        <br />
                        <button className="btn btn-primary px-5" type="submit">Registrarse</button>
                    </div>
                    <br/>
                    <p>Ya tienes una cuenta? <Link to="/">Click aqui para Iniciar Sesion</Link></p>
                    
                </form>
                </div>
                </div>
                </div>
                
            </div>
    );
  }
}