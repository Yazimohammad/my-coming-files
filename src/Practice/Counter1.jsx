import React, { useState } from "react";

export const Counter1 = () => {
  const [count, setCount] = useState(10);

  const handleincreament = () => {
      
    count < 30 && setCount(count + 1);
    if(count===30){setCount(count-20)}
  };
  return (
    <div className="main">
      <h1>Count: {count}</h1>
      <button onClick={handleincreament}>Increament</button>
      <button onClick={() => count > 10 && setCount(count - 1)}>
        Decreament
      </button>
    </div>
  );
};
