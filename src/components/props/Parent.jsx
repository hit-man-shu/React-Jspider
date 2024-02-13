import React from "react";
import Child from "./Child";
import { NameContextProvider } from "../../store/NameContext";

const Parent = () => {
  return (
    <div>
      <h1>I am Parent</h1>
      <NameContextProvider>
        <Child name="Himanshu" />
      </NameContextProvider>
    </div>
  );
};

export default Parent;
