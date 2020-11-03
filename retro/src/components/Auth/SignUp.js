import React from "react";
import "./Auth.css";
import { Input, Row, Col, Button } from "reactstrap";

export default function SignUp() {
  return (
    <div className="bgr">
      <Row>
        <Col className="col-sm-6 col-12">
          <div className="sign-form">
            <h1>SIGN UP</h1>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Input placeholder="email" />
            <Button>FINISH</Button>
          </div>
        </Col>
        <Col className="col-sm-6 col-12">
          <div className="sign-bgr">
              <h2>Hello</h2>
              <h2>Have had an account, get start right now</h2>
              <Button>SIGN IN</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
