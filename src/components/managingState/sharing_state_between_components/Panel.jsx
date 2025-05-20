/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

const Panel = ({ title, children,isActive,onActive }) => {
  

  
  return (
    <section className="panel">
      <h3>{title}</h3>

      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onActive}>Show</button>
      )}
    </section>
  );
};

export default Panel;
