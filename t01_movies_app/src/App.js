import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieInfo from "./components/movie";
import Home from "./components/home";



function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/details/:id" element={<MovieInfo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
