import React, { useState } from "react";
import "./Auth.css";
import { Input, Row, Col, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const url = `http://localhost:3000/login`;

  const login = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoggedIn(true);
        localStorage.setItem(
          "loggedIn",
          JSON.stringify({
            loggedIn: true,
            token: data.token,
            _id: data._id,
          })
        );
        setIsLoggedIn(!isLoggedIn);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <>
      {isLoggedIn ? (
        <Redirect to="/boards" />
      ) : (
        <div className="auth-bgr d-flex  align-items-center">
          {error && (
            <Row>
              <div class="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            </Row>
          )}
          <Row className="w-75 mx-auto py-5 d-flex align-items-center">
            <Col className="col-sm-6 col-12 pr-0">
              <div className="sign-form px-5">
                <h2 className="py-5 txt-color">LOG IN</h2>
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
                <div className="d-flex justify-content-end">
                  <button className="btn-grad" onClick={login}>
                    LOG IN
                  </button>
                </div>
              </div>
            </Col>
            <Col className="col-sm-6 col-12 pl-0">
              <div className="sign-bgr d-flex flex-column pt-5">
                <h2>Newbie,</h2>
                <p>Create your account now</p>
                <Button className="sign-in-btn" href="/register">
                  REGISTER
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}
