import React, { useState } from "react";

export const Counter = () => {
  const [cntr, setcntr] = useState(0);
  return (
    <div className="proditem">
      <button onClick={() => setcntr(cntr - 1)}>-</button>
      <h1>{cntr}</h1>
      <button onClick={() => setcntr(cntr + 1)}>+</button>
    </div>
  );
};
