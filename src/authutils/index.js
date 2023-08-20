import React from "react";
export const AuthContext = React.createContext();
export const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGNIN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
      }

    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
      }
    default:
        return state
    
  }
};
