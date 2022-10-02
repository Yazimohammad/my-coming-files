import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Effect2 = () => {
  const [data, setData] = useState([]);
  const [datacopy, setDatacopy] = useState([]);
  const [text, setText] = useState("");
  const getData = async () => {
    const apidata = await axios.get("https://fakestoreapi.com/products");
    console.log("Apidata ===>", apidata.data);
    setData(apidata.data);
    setDatacopy(apidata.data);
  }; 
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>hello</h1>
      {data.map((item) => (
        <ul>
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <Button>show data</Button>
          <li>{item.title}</li>
          <p> item.category</p>
        </ul>
      ))}
    </div>
  );
};

export default Effect2;
