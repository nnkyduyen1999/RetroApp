import React from "react";
import { Route, Redirect } from "react-router-dom";
import AddBoard from "./components/Board/AddBoard";
import Header from "./components/Header/Header";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    },
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        if (fakeAuth.authenticate) {
          return (
            <div>
              <Header />
              <Component {...props} />
              <AddBoard />
            </div>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}
