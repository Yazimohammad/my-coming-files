import axios from "axios";
import { Button } from "@mui/material";
import React, { useState } from "react";

export const DynamicApi = () => {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);

  const getData = async (number) => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${number}`
    );
    setData(result.data);
    console.log(result.data);
  };

  return (
    <div>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => getData(number)}>Getdata</button>
      <div>
        <h3>{data.userId}</h3>
        <h3>{data.id}</h3>
        <h3>{data.title}</h3>
        <h3>{data.body}</h3>
      </div>
    </div>
  );
};
