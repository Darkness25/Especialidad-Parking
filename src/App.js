import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import SignUp from "./components/signUp";
import Publicaciones from "./components/Publicaciones";
import NuevaPublicacion from "./components/NuevaPublicacion";
import EditarPublicacion from "./components/EditarPublicacion";
import VerPublicacion from "./components/VerPublicacion";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//Redux
//Importaremos el Provider y el Store, el Store es donde fluyen los datos
import { Provider } from "react-redux";
import store from "./store";

import { auth } from "./services/firebase";

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated == true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/publicaciones" />
        )
      }
    />
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    });
  }
  render() {
    return this.state.loading === true ? (
      <h2>Loading...</h2>
    ) : (
      <Router>
        <Provider store={store}>
          <Header />
          <div className="container mt-5">
            <Switch>
              <PublicRoute
                exact
                path="/"
                authenticated={this.state.authenticated}
                component={Home}
              />
              <PrivateRoute
                exact
                path="/publicaciones/nueva"
                authenticated={this.state.authenticated}
                component={NuevaPublicacion}
              />
              <PrivateRoute
                exact
                path="/publicaciones"
                authenticated={this.state.authenticated}
                component={Publicaciones}
              />
              <PublicRoute
                exact
                authenticated={this.state.authenticated}
                path="/signup"
                component={SignUp}
              />
              <PrivateRoute
                path="/publicaciones/editar/:id"
                authenticated={this.state.authenticated}
                component={EditarPublicacion}
              />
              <PrivateRoute
                path="/publicaciones/ver/:id"
                authenticated={this.state.authenticated}
                component={VerPublicacion}
              />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
