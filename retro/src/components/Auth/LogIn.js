import React from "react";
import "./Auth.css";
import { Input, Row, Col, Button } from "reactstrap";
import {
  useHistory,
  useLocation
} from "react-router-dom";
export default function LogIn() {
  let history = useHistory();
  let location = useLocation();

  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };


  return (
    <div>
      {/* <p>You must log in to view the page at {from.pathname}</p> */}
      <div className="auth-bgr d-flex align-items-center">
      <Row className="w-75 mx-auto py-5 d-flex align-items-center">
        <Col className="col-sm-6 col-12 pr-0">
          <div className="sign-form px-5">
            <h2 className="py-5 txt-color">LOG IN</h2>
            <Input placeholder="username" className="my-2 non-border" />
            <Input placeholder="password" className="my-2 non-border" />
            <div className="d-flex justify-content-end">
              <button className="btn-grad" onClick={login}>LOG IN</button>
            </div>
          </div>
        </Col>
        <Col className="col-sm-6 col-12 pl-0">
          <div className="sign-bgr d-flex flex-column pt-5">
            <h2>Newbie,</h2>
            <p>Create your account now</p>
            <Button className="sign-in-btn" href="/register">REGISTER</Button>
          </div>
        </Col>
      </Row>
    </div>
    </div>
  );
}
