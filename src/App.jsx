/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <h1>hello</h1>
      <Routes>
        <Route path="home" element={<div>start route</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
