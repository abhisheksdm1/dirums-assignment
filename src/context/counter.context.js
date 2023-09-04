"use client";

import React, { Dispatch, createContext, useReducer, useState } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
    const [formData, setFormData] = useState([]);

  return (
    <CounterContext.Provider
      value={{formData, setFormData }}
    >
      {children}
    </CounterContext.Provider>
  );
};
