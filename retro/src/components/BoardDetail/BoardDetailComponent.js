import React from "react";
import { Col, Row, Media } from "reactstrap";
import PlusIcon from "../../icons/add.png";
import "./BoardDetail.css";

export default function BoardDetailComponent({ boardDetail }) {
  const { cards } = boardDetail;
  const cardsColA = cards.filter((card) => card.columnType === "A");
  const cardsColB = cards.filter((card) => card.columnType === "B");
  const cardsColC = cards.filter((card) => card.columnType === "C");

  const renderListCard = (listCard) => {
    return listCard.map((card, index) => <li key={index}>{card.name}</li>);
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

          <div className="footer">
            <Media>
              <Media left>
                <Media
                  src={PlusIcon}
                  style={{
                    width: 16,
                    height: 16,
                    display: "inline-block",
                    marginRight: 5,
                  }}
                />
              </Media>
              <Media body>Add card ...</Media>
            </Media>
          </div>
        </Col>
        <Col className="col-3 list-wrapper">
          <div className="header">To improve</div>
          {cardsColB.length > 0 && <ul>{renderListCard(cardsColB)}</ul>}

          <div className="footer">
            <Media>
              <Media left>
                <Media
                  src={PlusIcon}
                  style={{
                    width: 16,
                    height: 16,
                    display: "inline-block",
                    marginRight: 5,
                  }}
                />
              </Media>
              <Media body>Add card ...</Media>
            </Media>
          </div>
        </Col>
        <Col className="col-3 list-wrapper">
          <div className="header">Action Items</div>
          {cardsColC.length > 0 && <ul>{renderListCard(cardsColC)}</ul>}
          <div className="footer">
            <Media>
              <Media left>
                <Media
                  src={PlusIcon}
                  style={{
                    width: 16,
                    height: 16,
                    display: "inline-block",
                    marginRight: 5,
                  }}
                />
              </Media>
              <Media body>Add card ...</Media>
            </Media>
          </div>
        </Col>
      </Row>
    </div>
  );
}
