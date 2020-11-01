import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import BoardDetailComponent from "./BoardDetailComponent";

export default function BoardDetail({ match }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState({});

  const url = `http://localhost:3000/boards/${match.params.id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner style={{ width: "3rem", height: "3rem" }} color="secondary" />
      </div>
    );
  } else {
    return (
      <>
        {!item.cards && <h1>No cards</h1>}
        {item.cards && <BoardDetailComponent boardDetail={item} />}
      </>
    );
  }
}
