import React from "react";
import { Col, Row } from "reactstrap";
import "./BoardDetail.css";
import AddCards from "./AddCards.js";
import Card from "../Card/Card";
//import EditIcon from "../../icons/edit-button.png";

export default function BoardDetailComponent({ boardDetail }) {
  const { cards } = boardDetail;
  const cardsColA = cards.filter((card) => card.columnType === "A");
  const cardsColB = cards.filter((card) => card.columnType === "B");
  const cardsColC = cards.filter((card) => card.columnType === "C");

  const renderListCard = (listCard) => {
    return listCard.map((card) => {
      return <Card cardInfo={card} boardId={boardDetail._id} />;
    });
  };

  return (
    <div className="container">
      <Row>
        <Col className="col-12 my-3">
          <h2 className="text-left text-monospace">{boardDetail.name}</h2>
        </Col>
      </Row>
      <Row>
        <Col className="col-3 list-wrapper">
          <div className="header">Went well</div>
          {cardsColA.length > 0 && <ul>{renderListCard(cardsColA)}</ul>}

          <AddCards />
        </Col>
        <Col className="col-3 list-wrapper">
          <div className="header">To improve</div>
          {cardsColB.length > 0 && <ul>{renderListCard(cardsColB)}</ul>}

          <AddCards />
        </Col>
        <Col className="col-3 list-wrapper">
          <div className="header">Action Items</div>
          {cardsColC.length > 0 && <ul>{renderListCard(cardsColC)}</ul>}
          <AddCards />
        </Col>
      </Row>
    </div>
  );
}
