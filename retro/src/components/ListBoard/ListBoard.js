import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import Boards from "../Board/Board";
import { Redirect } from "react-router-dom";

export default function ListBoards(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [boardList, setBoardList] = useState([]);
  const localUser = JSON.parse(localStorage.getItem("loggedIn"));
  
  // const url = "https://retroo-api.herokuapp.com/boards";
  useEffect(() => {
    fetch("http://localhost:3000/boards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localUser.token,
        "x-user-id": localUser._id,
      },
    })
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
    return (
      <div className="d-flex justify-content-center">
        <Spinner style={{ width: "3rem", height: "3rem" }} color="secondary" />
      </div>
    );
  } else {
    return (
      <Container className="ListBoards my-5">
            <Row>
              <Col className="col-12">
                <h2 className="text-left">Public Boards</h2>
              </Col>
            </Row>
            <>
              {boardList.length === 0 && (
                <div class="alert alert-danger" role="alert">
                  No board
                </div>
              )}
              {boardList.length > 0 && (
                <Row className="mt-5">
                  {boardList.map((board, index) => (
                    <Col className="col-6 col-sm-4" key={index}>
                      <Boards boardInfo={board} />
                    </Col>
                  ))}
                </Row>
              )}
            </>
          </Container>
    );
  }
}
