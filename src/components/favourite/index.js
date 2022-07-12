import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Favorite = () => {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);

  ////////////////////////////////

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favList"));
    setFavorites(items);
  }, []);

  ////////////////////////////////////////

  const removeItem = (element) => {
    let temp = favorites.filter((removedItem) => {
      return removedItem.id !== element.id;
    });
    localStorage.setItem("favList", JSON.stringify(temp));

   
    
  };



  const myfav =() =>{  const items = JSON.parse(localStorage.getItem("favList"));
  setFavorites(items);}

  

  ////////////////////////////////

  return (
    <div className="Home">
      <div className="movies">
      {favorites &&
        favorites.map((element, index) => {
          return (
            <div className="item" key={index}>
               

               <div className="movie-image">
              <img className="movImg"
                src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${element.poster_path}`}
              />
</div>


<div className="movie-details" > 
<div className="header">
  <p className="movie-title" >{element.original_title}</p></div>

  <div className="movie-description">
                    <p className="desc"> {element.overview }</p>
                  </div>
              <p className="movie-date"> Release Date : {element.release_date}</p>
              <p className="movie-date">Rate: {element.vote_average}</p>
              <Button variant="secondary"
                onClick={() => {
                  removeItem(element);
                  myfav()
                }}
                
              >
                Remove from Favorites
              </Button>

              </div>
           
            </div>
          );
        })}
        </div>
    </div>
  );
};

export default Favorite;
