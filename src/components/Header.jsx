import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import СircuitButton from "./СircuitButton";
import BlobButton from "./BlobButton";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img style={{marginLeft:"20px"}} src={logo} className="logo" alt="logo"></img>        
      </Link>
      <h1 className="logo-label">React Snippets</h1>
      <Link to="/">
        <span style={{marginLeft:"60px"}} className="blur-element">Home</span>
      </Link>
      <Link to="/buttons">
        <span className="blur-element">Buttons</span>
      </Link>
      <Link to="/">
        <span className="blur-element">Inputs</span>
      </Link>
      <Link to="/">
        <span className="blur-element">Forms</span>
      </Link>
      <Link to="/">
        <span className="blur-element">About us</span>
      </Link>
      <Link to="/">
        <span className="blur-element">Reviews</span>
      </Link>

      <СircuitButton
        onClick={() => {
          document
            .querySelector(".login-container")
            .classList?.toggle("login-container-active");
            document
            .querySelector(".page")
            .classList?.toggle("page-login-active");
        }}
        text="Sign up"
        margin="0 5px 0 20px"
      ></СircuitButton>
    </div>
  );
}

export default Header;
