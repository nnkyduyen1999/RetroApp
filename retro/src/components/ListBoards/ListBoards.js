import React, { useState, useEffect } from "react";
import Icon from "../../icons/add.png";
import { Media, Container, Row, Col } from "reactstrap";
import "./ListBoards.css";
import Boards from "../Boards/Boards";

export default function ListBoards(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/boards")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setBoardList(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div> Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading ...</div>;
  } else {
    return (
      <Container className="ListBoards my-5">
        <Row>
          <Col className="col-12">
            <h2 className="text-left">Public Boards</h2>
          </Col>
        </Row>
        <Row className="mt-5">
          {boardList.map((board, index) => (
            <Col className="col-6 col-sm-4" key={index}>
              <Boards boardInfo={board} />
            </Col>
          ))}
          
        </Row>
        
        <button className="material-button">
          <Media
            src={Icon}
            style={{ with: 30, height: 30, display: "inline-block" }}
          />
        </button>
      </Container>
    );
  }
}
