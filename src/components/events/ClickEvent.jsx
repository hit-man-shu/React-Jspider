import React, { useState } from "react";
import Button from "../../UI/Button";

const ClickEvent = () => {
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setColor(!color);
  };

  let a = "Himanshu";
  const print = (a) => {
    console.log(a);
  };

  return (
    <div className="text-3xl">
      <h1 className={color ? "bg-red-500" : ""}>Click</h1>
      <div className="flex gap-3 p-12">
        <Button onClick={handleClick}>Submit</Button>
        <Button onClick={() => print(a)}>Print</Button>
      </div>
    </div>
  );
};

export default ClickEvent;