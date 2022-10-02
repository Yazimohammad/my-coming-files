import React, { useState } from "react";

export const TodoList = () => {
  const [text, setText] = useState("");
  const [add, setAdd] = useState([]);

  const handlebutton = () => {
    setAdd([...add, text]);
  };

  const handledelete = (item) => {
    const result = add.filter((elem) => elem != item);
    setAdd(result);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handlebutton}>add</button>

      {add.map((item) => {
        return (
          <div>
            <h1>{item}</h1>
            <button onClick={() => handledelete(item)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};
