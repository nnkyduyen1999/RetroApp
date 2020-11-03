import React, { useState } from "react";
import {
  Media,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Input,
} from "reactstrap";
import "./AddBoard.css";
import Icon from "../../icons/add.png";

export default function AddBoard() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [value, setValue] = useState("");
  const url = `http://localhost:3000/boards`;

  const submitBoard = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: value }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toggle();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <button className="material-button" onClick={toggle}>
        <Media
          src={Icon}
          style={{ with: 30, height: 30, display: "inline-block" }}
        />
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add new board</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            name="name"
            value={value}
            onChange={handleChange}
            placeholder="Type board name ..."
          />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={submitBoard}>
            Create
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
