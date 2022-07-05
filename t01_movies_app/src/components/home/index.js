import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Home() {
  const navigate = useNavigate();

  const movieDetails = (element) => {
    console.log(element);

    navigate(`/details/${element.id}`) 
  };

  const [movie, setMovie] = useState("");

  const getMovie = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a"
      )

      .then((response) => {
        console.log(response.data.results);
        setMovie(response.data.results);
      })

      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="App">
     
      <div className="movies">
        {movie &&
          movie.map((element, index) => {
            return (
              <div key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${element.poster_path}`}
                />

                <p
                  onClick={() => {
                    movieDetails(element);
                  }}
                >
                
                  {element.original_title}
                </p>
                <p> {element.overview}</p>
                <p> Release Date : {element.release_date}</p>
                <p>Rate: {element.vote_average}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Home;