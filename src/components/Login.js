import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithFacebook, signInWithTwitter, signInWithGitHub, signInWithMicrosoft } from "../helpers/auth";
import { BsFillPeopleFill} from "react-icons/bs";
import {FaFacebook, FaGithub, FaGoogle, FaMicrosoft, FaTwitter, FaYahoo} from "react-icons/fa"



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

async facebookSignIn() {
    try {
        await signInWithFacebook();
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



async twitterSignIn() {
    try {
        await signInWithTwitter();
    } catch (error) {
        this.setState({error: error.message});
    }
}

async githubSignIn() {
    try {
        await signInWithGitHub();
    } catch (error) {
        this.setState({error: error.message});
    }
}

async microsoftSignIn() {
    try {
        await signInWithMicrosoft();
    } catch (error) {
        this.setState({error: error.message});
    }
}





render() {
    return (
        <div className="container text-center hero-image">
            <div className="row">
                <div className={"col-md-4"} />
                <div className="col-md-5">
                <div className="Ncontainer2ARLogin">
                    <form
                        className="py-5 px-3 content-align-center"
                        autoComplete="off"
                        onSubmit={this.handleSubmit}>
                        <h1 className={""}>Inicio de Sesion <br />< BsFillPeopleFill/></h1>

                        Ingresa con tu red social favorita.
                       
                        <hr/>

                        <button className="btn btn-danger mr-2" type="button" onClick={this.googleSignIn}>
                         <FaGoogle />                         
                        </button>
                        
                        
                        <strong>                        
                         <br />
                         <br /> Inicia Sesion con tu Correo y Contraseña 
                        </strong> 
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
        </div>
    );
}
}
