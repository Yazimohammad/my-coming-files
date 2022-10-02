import React from "react";

const Child = ({ props, handleChange }) => {
  return (
    <div>
      <h1>child</h1>
      <input value={props} b onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};

export default Child;
