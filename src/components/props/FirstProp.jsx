import React from "react";

const FirstProp = () => {
  const arr = [
    {
      name: ["Himanshu", "Sahoo", "Badal", "Kumar"],
      age: 22,
      location: ["Cuttack", "Odisha", "Bhairpur"],
    },
  ];
  return (
    <div>
      <div className="mx-auto my-12 max-w-xl bg-purple-400 px-20 py-10">
        <h1 className="text-center text-2xl">Map the Array</h1>

        <ul className="flex flex-col gap-2">
          {arr.map((item) => item.name.map((ele, i) => <li key={i}>{ele}</li>))}
        </ul>
        <h1 className="text-center text-2xl">Location</h1>
        <ul>
          {arr.map((item) =>
            item.location.map((ele, i) => <li key={i}>{ele}</li>),
          )}
        </ul>
      </div>
    </div>
  );
};

export default FirstProp;
