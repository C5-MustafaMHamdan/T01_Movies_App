import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";

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
    <div className="fav">
      {favorites &&
        favorites.map((element, index) => {
          return (
            <div key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${element.poster_path}`}
              />

              <p className="detail">{element.original_title}</p>
              <p> {element.overview}</p>
              <p> Release Date : {element.release_date}</p>
              <p>Rate: {element.vote_average}</p>
              <button
                onClick={() => {
                  removeItem(element);
                  myfav()
                }}
              >
                Remove from Favorites
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Favorite;
