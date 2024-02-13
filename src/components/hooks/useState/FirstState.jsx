import React, { useState } from "react";
import Button from "../../../UI/Button";

const FirstState = () => {
  const [count, setCount] = useState("Hi Name");

  const changeCount = () => {
    setCount((prevCount) => (prevCount = "Hi Himanshu"));
  };

  return (
    <div>
      <h1>Hello First state</h1>
      <h1>Count : {count}</h1>
      <Button onClick={changeCount}>Change</Button>
    </div>
  );
};

export default FirstState;
