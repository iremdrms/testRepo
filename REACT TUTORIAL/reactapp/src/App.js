import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  return (
    <div className="container">
      <Navbar />
      <hr />
      <User name="İrem Durmuş" department="Yazılım" salary="10000" />

      <User name="Ayşe Yılmaz" salary="7500" department="Bilişim" />
    </div>
  );
}

export default App;
