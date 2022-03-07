import React from "react";
import "./Button.css";

export default function Button({ estilo, label ,evento }) {

  return (

      <>
        <button className={`button ${estilo}`} onClick={evento} value={label}>
          {label}
        </button>
      </>
  
  );
}
