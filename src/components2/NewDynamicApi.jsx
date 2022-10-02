import axios from "axios";
import React, { useState } from "react";

export const NewDynamicApi = () => {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);

  const newdata = async () => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${number}`
    );
    setData(result.data);
    console.log(result.data);
  };

  return (
    <div>
      <input type="Number" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => newdata(Number)}>getdata</button>

      {data.map((item) => {
        return (
          <div>
            <h2>Body:-{item.body}</h2>
            <h2>Email:-{item.email}</h2>
            <h2>iD:-{item.id}</h2>
            <h2>Name:-{item.name}</h2>
            <h2>PostID:-{item.postId}</h2>
          </div>
        );
      })}
    </div>
  );
};
