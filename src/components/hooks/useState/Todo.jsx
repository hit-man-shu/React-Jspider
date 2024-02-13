// import React, { useState } from "react";
// import Button from "../../../UI/Button";

// const Todo = () => {
//   const [data, setData] = useState("");
//   const [items, setItems] = useState([]);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     setItems((prevItem) => {
//       return [...prevItem, { id: Date.now(), data }];
//     });

//     setData("");
//   };

//   const deleteHandler = (id) => {
//     const newItem = items.filter((ele) => ele.id !== id);
//     setItems(newItem);
//   };

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           onChange={(e) => setData(e.target.value)}
//           value={data}
//           placeholder="Enter a task"
//         />

//         <Button>Add</Button>
//       </form>

//       <ul>
//         {items.map((ele) => {
//           return (
//             <li key={ele.id}>
//               {ele.data}{" "}
//               <span>
//                 <Button onClick={() => deleteHandler(ele.id)}>Delete</Button>
//               </span>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Todo;

import React, { useReducer, useState } from "react";
import Button from "../../../UI/Button";

const reducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      itmes: [...state.itmes, { id: Date.now(), data: action.payload }],
    };
  }

  if (action.type === "DELETE") {
    return {
      ...state,
      itmes: state.itmes.filter((ele) => ele.id !== action.payload),
    };
  }

  if (action.type === "INC") {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === "DEC") {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  return state;
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, itmes: [] });

  const [data, setData] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!data.trim()) {
      alert("Invalid input");
      return;
    }

    dispatch({ type: "ADD", payload: data });
    setData("");
  };

  return (
    <div>
      <div className="flex gap-2 p-3">
        <Button onClick={() => dispatch({ type: "INC" })}>Inc</Button>
        <h1>Counter: {state.count}</h1>
        <Button onClick={() => dispatch({ type: "DEC" })}>Dec</Button>
      </div>

      <div>Todo :{state.itmes.length}</div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter a task"
          onChange={(e) => setData(e.target.value)}
          value={data}
        />
        <Button>Add</Button>
      </form>

      <ul>
        {state.itmes.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.data}
              <span>
                <Button
                  onClick={() => dispatch({ type: "DELETE", payload: ele.id })}
                >
                  Delete
                </Button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
