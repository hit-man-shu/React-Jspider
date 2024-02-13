import React, { useContext } from "react";
import NameContext from "../../store/NameContext";

const Child = ({ name }) => {
  const { myName, age } = useContext(NameContext);

  return (
    <div>
      <h1>I am Child</h1>
      <h1>And my name is {name}</h1>
      <h1>
        My Another name is {myName} and my age is {age}.
      </h1>
    </div>
  );
};

export default Child;
