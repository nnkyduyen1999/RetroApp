import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Media,
  Row,
  Col,
  Input,
} from "reactstrap";
import "./Board.css";
import TrashIcon from "../../icons/trash.png";
import CopyIcon from "../../icons/archives.png";
import EditIcon from "../../icons/writing.png";

export default function Boards({ boardInfo }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [newName, setNewName] = useState(boardInfo.name);
  const { _id } = boardInfo;
  const url = `http://localhost:3000/boards/${_id}`;

  const handleOnChange = (event) => {
    setNewName(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.keyCode === 13) {
      let inputText = event.target.value;
      inputText = inputText.trim();
      if (inputText === "" || !inputText) {
        return;
      }
      setNewName(inputText);
      fetch(url, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: inputText}),
      })
        .then((response) => response.json())
        .then(() => {
          setIsUpdateClicked(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleDeleteBtnPress = () => {
    fetch(url, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then(() => {
        setIsDeleted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <>
      {!isDeleted && (
        <Card className="mb-3 shadow-card">
          <CardBody className="text-left">
            <CardTitle className="text-monospace">
              <Row>
                {!isUpdateClicked && (
                  <>
                    {newName.length < 20 && (
                      <Col className="col-6 col-sm-10">
                        <h4>{newName}</h4>
                      </Col>
                    )}
                    {newName.length >= 20 && (
                      <Col className="col-6 col-sm-10">
                        <h4>{newName.slice(0, 15)} ...</h4>
                      </Col>
                    )}{" "}
                  </>
                )}

                {isUpdateClicked && (
                  <Col className="col-6 col-sm-10">
                    <Input
                        type="text"
                        name="name"
                        value={newName}
                        onChange={handleOnChange}
                        onKeyUp={handleEnterPress}
                      />
                  </Col>
                )}
                <Col className="col-6 col-sm-2">
                  <Media
                    className="icon-btn"
                    src={EditIcon}
                    style={{ with: 30, height: 30, display: "inline-block" }}
                    onClick={() => setIsUpdateClicked(true)}
                  />
                </Col>
              </Row>
            </CardTitle>
            <div className="card-body">
              <div
                className="clearfix font-weight-light"
                style={{ padding: ".5rem" }}
              >
                <p className="float-left">{boardInfo.createDate}</p>
                {boardInfo.cards.length > 0 && (
                  <p className="float-right">{boardInfo.cards.length} cards</p>
                )}
                {boardInfo.cards.length === 0 && (
                  <p className="float-right">No card</p>
                )}
              </div>

              {boardInfo.description.length < 30 && (
                <p>{boardInfo.description}</p>
              )}
              {boardInfo.description.length >= 30 && (
                <p>{boardInfo.description.slice(0, 30)}...</p>
              )}
            </div>
            <hr />
            <Row>
              <Col className="col-6">
                <Button href={`/boards/${boardInfo._id}`}>See more</Button>
              </Col>
              <Col className="col-6">
                <Row className="d-flex justify-content-end">
                  <Col className="col-6 col-sm-4">
                    <Media
                      className="icon-btn"
                      src={CopyIcon}
                      style={{ with: 30, height: 30, display: "inline-block" }}
                      onClick={() => setIsDeleted(true)}
                    />
                  </Col>
                  <Col className="col-6 col-sm-4">
                    <Media
                      className="icon-btn"
                      src={TrashIcon}
                      style={{ with: 30, height: 30, display: "inline-block" }}
                      onClick={handleDeleteBtnPress}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      )}
    </>
  );
}
