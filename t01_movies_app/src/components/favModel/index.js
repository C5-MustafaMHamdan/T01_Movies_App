import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Fav = (props) => {
  const { addToFavList, info } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add to favorites
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>fav</Modal.Title>
        </Modal.Header>
        <Modal.Body>want to add the movie</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addToFavList(info);
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Fav;
