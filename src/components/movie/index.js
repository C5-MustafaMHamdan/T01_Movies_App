import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Fav from "../favModel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

const MovieInfo = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  let { id } = useParams();

  const [favorites, setFavorites] = useState([]);

  ////////////////////////////////

  const addToFavList = (element) => {
    let favList;
    localStorage.getItem("favList");
    favList = JSON.parse(localStorage.getItem("favList")) || [];
    favList.push(element);
    localStorage.setItem("favList", JSON.stringify(favList));
  };

  const checkFav = () => {
    const store = JSON.parse(localStorage.getItem("favList")) || [];
    const store2 = store.map((element) => {
      return element.id;
    });
    return store2;
  };

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
    checkFav();
  }, []);

  return (
    <div className="movieInfo">
      <div className="movie-item">
      <div className="img-div">
        <img className="mov-img" src={`https://image.tmdb.org/t/p/w400/${info.backdrop_path}`} />
      </div>

      <div className="desc-title-btn">
        <div className="title_movie ">  <h1>{info.original_title}</h1></div>
         <div className="desc-movie">
          <p> {info.overview}</p>
          </div>

          <div className="additional-info">
          <p> Release Date : {info.release_date}</p>
          <p>Rate: {info.vote_average}</p> </div>
        

        <div className="clickDiv">
          <div>
            <Fav addToFavList={addToFavList} info={info} checkFav={checkFav} />
          </div>

          <div>
            <Button
              className="home-btn"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
          </div>
          <div>
            <Button
              className="addToFav-btn"
              onClick={() => {
                navigate("/favorites");
              }}
            >
              Go To Favorites
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MovieInfo;


 