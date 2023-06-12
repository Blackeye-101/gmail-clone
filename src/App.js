import React from "react";
import "./App.css";

// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";

//router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div className="app__body">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/mail" Component={Mail}></Route>
            <Route path="/" Component={EmailList}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
