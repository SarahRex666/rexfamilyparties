import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home.js";
import NavBar from "./NavBar";
import Food from "./Food.js";
import DressCode from "./DressCode";
import About from "./About.js";
import SignIn from "./SignIn";
import Entertainment from "./Entertainment";
import Friend from "./Friend";
import Signup from "./Signup";
import GetHere from "./GetHere";
import Rsvp from "./Rsvp";
import Logout from "./Logout";

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [authChecked, setAuthChecked] = useState(false);

  console.log(currentUser);

  useEffect(() => {
    fetch("/me", {
      withCredentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthChecked(true);
        });
      } else setAuthChecked(true);
    });
  }, []);
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <nav>
            <NavBar currentUser={currentUser} />
          </nav>
          <br></br>
          <h2>
            Shrekfest Block Party Takeover for Brianas Redo 30th Birthday Party
          </h2>
          <br></br>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/food" element={<Food />} />
              <Route path="/code" element={<DressCode />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/logout"
                element={<Logout setCurrentUser={setCurrentUser} />}
              />
              <Route
                path="/SignIn"
                element={<SignIn setCurrentUser={setCurrentUser} />}
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/entertainment" element={<Entertainment />} />
              <Route path="/friend" element={<Friend />} />
              <Route path="/gethere" element={<GetHere />} />
              <Route
                path="/rsvp"
                element={<Rsvp currentUser={currentUser} />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
