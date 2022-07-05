import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";

const MovieInfo = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  let { id } = useParams();

  ////////////////////////////////
  //getMoviebyId
  const getMoviebyId = () => {
     
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((response) => {
        console.log(response.data);
        setInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMoviebyId();
  }, []);

  return (
    <div className="movieInfo">
      <div>
        <img src={`https://image.tmdb.org/t/p/w400/${info.poster_path}`} />
        <p> {info.overview}</p>
        <p> Release Date : {info.release_date}</p>
        <p>Rate: {info.vote_average}</p>
      </div>
      <h1>movie</h1>
      <div className="clickDiv">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default MovieInfo;
