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
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
