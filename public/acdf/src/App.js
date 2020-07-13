import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login/Login";
import Appbar from "./Components/Appbar";
import axios from "axios";
import "fontsource-roboto";
import "./App.css";

function Main(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Appbar/>;
  }
  return <Login />;
}

function App() {
  const [jwt, setJwt] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setJwt(window.localStorage.getItem("_token"));
    console.log(jwt)
    axios
      .get("http://127.0.0.1:3000/getUser", {params: { token: jwt }})
      .then((response) => {
        console.log(response);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
        setLoggedIn(false);
      });
  });

  return (
   <Main isLoggedIn={loggedIn}></Main>
  );
}

export default App;
