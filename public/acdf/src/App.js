import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login/Login";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Aplicacion para el control digital y formatos del DSC</p>
          <nav>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link to="/login">Iniciar sesión</Link>
            
          </a>
          </nav>
        </header>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
