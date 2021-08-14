import React from "react";
import "../css/components/circuit-btn.css";

function СircuitButton(props) {
  return (
    <div
      style={{ margin: props.margin ? props.margin : "0px" }}
      className="circuit-btn-container"
    >
      <button
        onClick={props.onClick ? props.onClick : () => {}}
        className="circuit-btn"
      >
        <svg width="200px" height="60px" viewBox="0 0 200 60" class="border">
          <polyline points="199,1 199,59 1,59 1,1 199,1" class="bg-line" />
          <polyline points="199,1 199,59 1,59 1,1 199,1" class="hl-line" />
        </svg>
        <span>{props.text}</span>
      </button>
    </div>
  );
}

export default СircuitButton;
