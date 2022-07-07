import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieInfo from "./components/movie";
import Home from "./components/home";
import Favorite from "./components/favourite";
 import Navy from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (
    <div className="App">
  <Navy/>
      <Routes>
        <Route path="/details/:id" element={<MovieInfo />} />
            <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite/>}/>
      </Routes>
    </div>
  );
}

export default App;
