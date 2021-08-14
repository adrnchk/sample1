import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ButtonsPage from "./pages/ButtonsPage";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
  IconButton,
} from "@material-ui/core";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function navigator() {
  return (
    <div>
      <div className="page">
        <Header></Header>

        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/buttons" component={ButtonsPage}></Route>
      </div>

      <Login></Login>
    </div>
  );
}

export default navigator;
