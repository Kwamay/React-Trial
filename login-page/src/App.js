import React from "react";
import { Routes, Route } from "react-router-dom"; // Import BrowserRouter and other required components from react-router-dom
import Signup from "./component/Signup"; // Import the Signup component
import Signin from "./component/Signin"; // Import the Signup component
import "./css/signin.css"
import Dashboard from "./component/Dashboard";

function App() {
  
  return (
    <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  
  );
}

export default App;
