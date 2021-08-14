import React from "react";
import BlobButton from "./BlobButton";
import { useState, useRef, useEffect } from "react";
import "../css/components/login.css";

const useClickOutside = (handler) => {
  let domNode = useRef(null);

  useEffect(() => {
    let maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

function Login() {
  let domNode = useClickOutside(() => {
    document
      .querySelector(".login-container")
      .classList?.remove("login-container-active");
    document.querySelector(".page").classList?.remove("page-login-active");
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div ref={domNode} className="login-container">
      <h1> LOGIN</h1>
      <div className="input-wrapper">
        <input
          className="input"
          type="text"
          name="email"
          autoFocus
          required
          onChange={(e) => {
            e.target.className =
              e.target.value.trim() != "" ? "input has-val" : "input";
            setEmail(e.target.value);
          }}
        />
        <span className="input-placeholder">Email</span>
      </div>

      <div style={{ marginTop: "20px" }} className="input-wrapper">
        <input
          className="input"
          type="password"
          name="pass"
          autoFocus
          required
          onChange={(e) => {
            e.target.className =
              e.target.value.trim() != "" ? "input has-val" : "input";
            setPassword(e.target.value);
          }}
        />
        <span className="input-placeholder">Password</span>
      </div>

      <BlobButton margin="30px 0 0 0" width="87%" text = "Sign in"></BlobButton>
    </div>
  );
}

export default Login;
