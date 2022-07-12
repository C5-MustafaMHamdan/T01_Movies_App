import React, { useState, useEffect } from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
const Fav = (props) => {
  const { addToFavList, info ,checkFav} = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
    {
checkFav().includes(info.id)? ( <div >  <Modal.Title className="added">Added To Favorites</Modal.Title></div>):( <> <Button variant="primary" onClick={handleShow}>
Add to favorites
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Add Movie To Favorites</Modal.Title>
</Modal.Header>
<Modal.Body>Do you want to add This Movie to favorites list?</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    No
  </Button>
  <Button
    variant="primary"
    onClick={() => {
      addToFavList(info);
      handleClose();
    }}
  >
    Yes
  </Button>
</Modal.Footer>
</Modal></> )
    }
      
    </>
  );
};

export default Fav;
