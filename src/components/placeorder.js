import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Placeorder() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="Orderbtn">
        {" "}
        Оформить заказ{" "}
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Оформление заказа</Modal.Title>
        </Modal.Header>
        <Modal.Body>Информация о заказе</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary">Оформить заказ</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Placeorder;
