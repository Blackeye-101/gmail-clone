import React, { useEffect } from "react";
import "./App.css";

// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import Login from "./components/Login";

//router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//state
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { login } from "./features/userSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //the user is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login></Login>
      ) : (
        <div className="App">
          <Header></Header>
          <div className="app__body">
            <Sidebar></Sidebar>
            <Routes>
              <Route path="/mail" Component={Mail}></Route>
              <Route path="/" Component={EmailList}></Route>
            </Routes>
          </div>

          {sendMessageIsOpen && <SendMail></SendMail>}
        </div>
      )}
    </Router>
  );
}

export default App;
