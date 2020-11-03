import React from "react";
import "./Auth.css";
import { Input, Row, Col, Button } from "reactstrap";

export default function SignUp() {
  return (
    <div className="auth-bgr d-flex align-items-center">
      <Row className="w-75 mx-auto py-5 d-flex align-items-center">
        <Col className="col-sm-6 col-12 pr-0">
          <div className="sign-form px-5">
            <h2 className="py-5 txt-color">SIGN UP</h2>
            <Input placeholder="username" className="my-2 non-border" />
            <Input placeholder="password" className="my-2 non-border" />
            <Input placeholder="email" className="mb-5 non-border" />
            <div className="d-flex justify-content-end">
              <button className="btn-grad">FINISH</button>
            </div>
          </div>
        </Col>
        <Col className="col-sm-6 col-12 pl-0">
          <div className="sign-bgr d-flex flex-column pt-5">
            <h2>Hello,</h2>
            <p>Have had an account, let's get started</p>
            <Button className="sign-in-btn" href="/login">SIGN IN</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
