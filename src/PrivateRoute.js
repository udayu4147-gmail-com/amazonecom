// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// const PrivateRoute = ({ element }) => {
//   const isAuthenticated = localStorage.getItem("token") !== null;

//   if (isAuthenticated) {
//     return <Route element={element} />;
//   } else {
//     return <Navigate to="/signin" />;
//   }
// };

// export default PrivateRoute;

import React, { useReducer } from "react";
import { initialState, reducer } from "./authutils";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const [state] = useReducer(reducer, initialState);
  if (!state.isAuthenticated) {
   
    return <Navigate to="/Signin" />;
  }

  return children;
}

export default PrivateRoute;
