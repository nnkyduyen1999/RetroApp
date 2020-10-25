import React, { useState } from "react";
import { Card, CardBody, CardTitle, Button, Media, Row, Col } from "reactstrap";
import "./Boards.css";
import TrashIcon from "../../icons/trash-can.png";

export default function Boards({ boardInfo }) {
  const [isDeleted, setIsDetected] = useState(false);

  return (
    <>
      {!isDeleted && (
        <Card className="mb-3 shadow-card">
          <CardBody className="text-left">
            <CardTitle className="text-monospace">
              <h4>{boardInfo.name}</h4>
            </CardTitle>
            <div className="card-body">
              <div
                className="clearfix font-weight-light"
                style={{ padding: ".5rem" }}
              >
                <p className="float-left">14/06/2020</p>
                <p className="float-right">{boardInfo.cards.length} cards</p>
              </div>
              <p>{boardInfo.description}</p>
            </div>
            <hr />
            <Row>
              <Col className="col-6">
                <Button href="/boards/detail">Board details</Button>
              </Col>
              <Col className="col-6 d-flex justify-content-end">
                <Media className="trash-btn"
                  src={TrashIcon}
                  style={{ with: 30, height: 30, display: "inline-block" }}
                  onClick={() => setIsDetected(true)}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      )}
    </>
  );
}
