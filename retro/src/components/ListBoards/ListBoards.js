import React from "react";
import Icon from "../../icons/add.png";
import {
  Media,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import "./ListBoards.css";

export default function ListBoards(props) {
  return (
    <Container className="ListBoards my-5">
      <Row>
        <Col className="col-12">
          <h2 className="text-left">Public Boards</h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="col-6 col-sm-4">
          <Card className="mb-3">
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-6 col-sm-4">
          <Card>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-6 col-sm-4">
          <Card>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-6 col-sm-4">
          <Card>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-6 col-sm-4">
          <Card>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <button className="material-button shadow">
        <Media
          src={Icon}
          style={{ with: 30, height: 30, display: "inline-block" }}
        />
      </button>
    </Container>
  );
}
