import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, role, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const user = localStorage.getItem("user");

        if (!user) {
          //if user is not logged in redirect to login page
          return <Redirect to="/login" />;
        } else if (user && role === "S") {
          //If user is logged in and user is not admin
          return <Redirect to="/" />;
        } else {
          //If user is logged in and user is admin
          return <Component {...props} />;
        }
      }}
    />
  );
}

export { PrivateRoute };
