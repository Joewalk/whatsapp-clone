import React, { createContext, useContext, useReducer } from "react";

// create the Context
export const StateContext = createContext();

// set up a data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Allow us to pull data from the data layer
export const useStateValue = () => useContext(StateContext);
