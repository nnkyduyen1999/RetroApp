import React, { useState } from "react";
import "./Auth.css";
import { Redirect } from "react-router-dom";
import { Input, Row, Col, Button } from "reactstrap";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState("");

  const url = `http://localhost:3000/register`;

  const submitUser = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsSignedUp(!isSignedUp);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <>
      {isSignedUp ? (
        <Redirect to="/login" />
      ) : (
        <div className="auth-bgr d-flex flex-column align-items-center">
          {error && <Row>
            <div class="alert alert-danger mt-3" role="alert">
              {error}
            </div>
          </Row>}
          <Row className="w-75 mx-auto py-5 d-flex align-items-center">
            <Col className="col-sm-6 col-12 pr-0">
              <div className="sign-form px-5">
                <h2 className="py-5 txt-color">SIGN UP</h2>
                <Input
                  placeholder="username"
                  name="username"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  className="my-2 non-border"
                />
                <Input
                  placeholder="password"
                  name="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  className="my-2 non-border"
                />
                <Input
                  placeholder="email"
                  name="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  className="mb-5 non-border"
                />
                <div className="d-flex justify-content-end">
                  <button className="btn-grad" onClick={submitUser}>
                    FINISH
                  </button>
                </div>
              </div>
            </Col>
            <Col className="col-sm-6 col-12 pl-0">
              <div className="sign-bgr d-flex flex-column pt-5">
                <h2>Hello,</h2>
                <p>Have had an account, let's get started</p>
                <Button className="sign-in-btn" href="/login">
                  SIGN IN
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}
