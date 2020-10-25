import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import "./Boards.css";

export default function Boards({ boardInfo }) {
  return (
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
            <p className="float-right">Nums of cards</p>
          </div>
          <p>{boardInfo.description}</p>
        </div>
        <hr />
        <Button>Go somewhere</Button>
      </CardBody>
    </Card>
  );
}
