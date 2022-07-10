import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container className="me-auto">
  <Navbar.Brand  href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcq_qZPsAlAc5TDslRax6Fugfoofs5G0Iiw&usqp=CAU"  className="logo"  />Best Movie</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/" className="Home-link">Home</Nav.Link>
      <Nav.Link href="/favorites"></Nav.Link>
          </Nav>
    <Nav>

      <Nav.Link eventKey={2} href="/favorites" className="fav-link">
      Favorites {favorites.length}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
      <br></br>
    </>
  );
}

export default Navy;

