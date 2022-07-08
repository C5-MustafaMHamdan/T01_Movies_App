import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import React, { useState, useEffect } from "react";

function Navy() {

  const [favorites, setFavorites] = useState([]);

  ////////////////////////////////

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favList"));
    setFavorites(favs);
  }, [favorites]);






  return (
    <>
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav  className="Navi">
            <Nav.Link 
 href="/">Home</Nav.Link>
            <Nav.Link href="/favorites">Favorites{favorites.length}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
    </>
  );
}

export default Navy;

