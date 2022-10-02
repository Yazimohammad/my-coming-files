import React, { useState } from "react";

export const TodoList2 = () => {
  const [data, setData] = useState("");
  const [add, setAdd] = useState([]);

  const handlebutton = () => {
    setAdd([...add, data]);
  };
  

  return (
    <div>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <button onClick={handlebutton}>Add</button>
      {add.map((item) => {
        return (
          <div>
            <h1>{item}</h1>
          </div>
        );
      })}
    </div>
  );
};
