import React, { createContext } from "react";

const NameContext = createContext({
  myName: "",
  age: 0,
});

export default NameContext;

export const NameContextProvider = ({ children }) => {
  const myData = {
    myName: "Badal",
    age: 22,
  };
  return <NameContext.Provider value={myData}>{children}</NameContext.Provider>;
};