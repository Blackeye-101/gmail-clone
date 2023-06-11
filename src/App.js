import React from "react";
import "./App.css";

// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="App-body">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
