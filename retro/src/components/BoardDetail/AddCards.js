import React, { useState } from "react";
import { Button, Media } from "reactstrap";
import "./BoardDetail.css";
import PlusIcon from "../../icons/add.png";
import Card from "../Card/Card";

export default function AddCard({ column, boardId }) {
  const [isAddCardClicked, setIsAddCardClicked] = useState(false);
  const [newCardInfo, setNewCardInfo] = useState({
    name: "",
    columnType: ""
  });
  const [addSucceeded, setaddSucceeded] = useState(false);
  const url = `http://localhost:3000/boards/add-cards/${boardId}`;

  const localUser = JSON.parse(localStorage.getItem("loggedIn"));

  const handleChange = (event) => {
    setNewCardInfo({ 
      name: event.target.value,
      columnType: column
    });
  }

  const submitCard = (event) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localUser.token,
      },
      body: JSON.stringify(newCardInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setIsAddCardClicked(!isAddCardClicked);
        setaddSucceeded(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      event.preventDefault();
  };
  return (
    <>
      {addSucceeded && <Card cardInfo={newCardInfo} boardId={boardId} />}
      {isAddCardClicked && (
      <div>
        <textarea
            name="name"
            className="add-card-input form-control"
            placeholder="Add a title for card..."
            onChange={handleChange}
          ></textarea>
    
          <Button onClick={submitCard} className="btn btn-success btn-sm mb-2">
            Add
          </Button>
      </div>
          
      )}
      {!isAddCardClicked && (
        <div className="footer" onClick={() => setIsAddCardClicked(true)}>
          <Media>
            <Media left>
              <Media
                src={PlusIcon}
                style={{
                  width: 15,
                  height: 15,
                  display: "inline-block",
                  marginRight: 5,
                }}
              />
            </Media>
            <Media>Add card ...</Media>
          </Media>
        </div>
      )}
    </>
  );
}
