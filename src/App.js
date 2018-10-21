import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Shows from "./components/Shows";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Shows />
      </div>
    );
  }
}

export default App;
