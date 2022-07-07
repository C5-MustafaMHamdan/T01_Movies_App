import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

function Navy() {
  return (
    <>
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="Navi">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
    </>
  );
}

export default Navy;
