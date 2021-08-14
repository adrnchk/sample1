import React from "react";
import "../css/components/blob-btn.css"

function BlobButton(props) {
  return (
    <div  className="blob-btn-container">
      <button style={{width: props.width?props.width:"200px", margin:props.margin?props.margin:"0px"}} className="blob-btn">
        {props.text}
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </button>
      <br />

    </div>
  );
}

export default BlobButton;
