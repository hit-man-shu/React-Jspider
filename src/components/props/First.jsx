import React, { useReducer, useRef } from "react";
import Button from "../../UI/Button";

const reducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      items: [...state.items, { id: Date.now(), data: action.payload }],
    };
  }

  return state;
};

const First = () => {
  const data = useRef();
  const [state, dispatch] = useReducer(reducer, { items: [] });

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredData = data.current.value;

    if (!enteredData.trim()) {
      alert("invalid data");
      return;
    }

    dispatch({ type: "ADD", payload: enteredData });
    data.current.value = "";
  };

  return (
    <div>
      <h1>Hello First</h1>

      <form onSubmit={submitHandler} className="flex gap-4">
        <input type="text" ref={data} />
        <Button>+ Add</Button>
        
      </form>

      <ul>
        {state.items.map((ele) => {
          return <li key={ele.id}>{ele.data}</li>;
        })}
      </ul>
    </div>
  );
};

export default First;
