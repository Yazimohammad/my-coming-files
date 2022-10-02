import React from "react";
import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState("");

  const handleChange = (value) => {
    setData(value);
  };
  console.log(data);
  return (
    <div>
      <h1>parent</h1>
      <input value={data} onChange={(e) => setData(e.target.value)}/>
      <Child props={data} handleChnge={handleChange} />
    </div>
  );
};

export default Parent;
