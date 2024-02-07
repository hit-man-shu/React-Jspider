import React from "react";

const Input = ({ label, id, ...props }) => {
  return (
    <>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className="focus:shadow-outline appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id={id}
          {...props}
        />
      </div>
    </>
  );
};

export default Input;
