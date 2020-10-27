import React, { useState } from "react";
import { Card, CardBody, CardTitle, Button, Media, Row, Col } from "reactstrap";
import "./Boards.css";
import TrashIcon from "../../icons/trash.png";
import CopyIcon from "../../icons/archives.png";
import EditIcon from "../../icons/writing.png";

export default function Boards({ boardInfo }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const url = "/detail/" + boardInfo._id;

  return (
    <>
      {!isDeleted && (
        <Card className="mb-3 shadow-card">
          <CardBody className="text-left">
            <CardTitle className="text-monospace">
              <Row>
                {boardInfo.name.length < 20 && <Col className="col-6 col-sm-10"><h4>{boardInfo.name}</h4></Col>}
                {boardInfo.name.length >= 20 && <Col className="col-6 col-sm-10"><h4>{boardInfo.name.slice(0, 15)} ...</h4></Col>}
                <Col className="col-6 col-sm-2">
                <Media
                      className="icon-btn"
                      src={EditIcon}
                      style={{ with: 30, height: 30, display: "inline-block" }}
                      onClick={() => setIsDeleted(true)}
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
                {boardInfo.cards.length > 0 &&  <p className="float-right">{boardInfo.cards.length} cards</p>}
                {boardInfo.cards.length === 0 &&  <p className="float-right">No card</p>}
              </div>
              
              {boardInfo.description.length < 70 && <p>{boardInfo.description}</p>}
              {boardInfo.description.length >= 70 && <p>{boardInfo.description.slice(0, 60)}...</p>}
            </div>
            <hr />
            <Row>
              <Col className="col-6">
                <Button href={url}>Board details</Button>
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
                      onClick={() => setIsDeleted(true)}
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
