import React, { useState } from "react";

export const Todos = () => {
  const [todo, setTodo] = useState();
  const [add, setAdd] = useState([]);
  const handleadd = () => {``
    setAdd([...add, todo]);
  };
  const handledlt = (i) => {
    const result = add.filter((elem, ind) => ind != i);
    setAdd(result);
  };
  const handlebtn = (item) => {
    const result = add.filter((elem) => elem !== item);
    setAdd(result);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter here"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleadd}>Add</button>
      {add.map((item, i) => {
        return (
          <div>
            <h1 onClick={() => handledlt(i)}>{item}</h1>
            <button onClick={()=>handlebtn(item)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
