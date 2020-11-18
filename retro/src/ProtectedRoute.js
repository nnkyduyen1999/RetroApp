import React from "react";
import { Route, Redirect } from "react-router-dom";
import AddBoard from "./components/Board/AddBoard";
import Header from "./components/Header/Header";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const localUser = JSON.parse(localStorage.getItem("loggedIn"));

  return (
    <Route
      {...rest}
      render={(props) => {
        if (localUser) {
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
                pathname: "/login",
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
