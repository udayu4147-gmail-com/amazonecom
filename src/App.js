
import React from "react";
import {  Route, Routes} from "react-router-dom";
import Signin from "./Components/Signin";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from './PrivateRoute';
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import About from "./Components/about";
import "./App.css"



const App = () => {
  return (
    <div>
     <h1>Ecom WebSite</h1>
      <Routes>
        <Route
          path="/ecom"
          element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About  />} />



      </Routes>
    </div>
  );
};

export default App;



