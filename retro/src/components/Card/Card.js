import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "reactstrap";
import "../BoardDetail/BoardDetail.css";

export default function Card({ cardInfo, boardId }) {
  const [modal, setModal] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardId, setCardId] = useState("");
  const [isDeletedCard, setIsDeletedCard] = useState(false);
  const url = `http://localhost:3000/boards/${boardId}/${cardId}`;

  const toggle = () => {
    setCardId(cardInfo._id);
    if (cardName !== "") {
      setCardName(cardName);
    } else {
      setCardName(cardInfo.name);
    }
    setModal(!modal);
  };
  const handleTypingName = (event) => {
    setCardName(event.target.value);
  };

  const handleUpdateCard = () => {
    let inputText = cardName;
    inputText = inputText.trim();
    if (inputText === "" || !inputText) {
      return;
    }
    setCardName(inputText);
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: inputText }),
    })
      .then((response) => response.json())
      .then(
        toggle({
          id: cardId,
          name: cardName,
        })
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDeleteCard = () => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setIsDeletedCard(true);
        toggle({
          id: "",
          name: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const RenderCard = () => {
    return (
      <>
        {cardName && (
          <li
            className="card"
            key={cardInfo._id}
            onClick={toggle}
          >
            {cardName}
          </li>
        )}
        {!cardName && (
          <li
            className="card"
            key={cardInfo._id}
            onClick={toggle}
          >
            {cardInfo.name}
          </li>
        )}
      </>
    );
  };
  return (
    <div>
      {!isDeletedCard && <RenderCard />}

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update card</ModalHeader>
        <ModalBody>
          <Input value={cardName} name="name" onChange={handleTypingName} />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleUpdateCard}>
            Update
          </Button>
          <Button color="danger" onClick={handleDeleteCard}>
            Delete Card
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
