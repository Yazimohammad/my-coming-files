import React, { useState, useEffect } from "react";
import axios from "axios";

export const Effect = () => {
  //   const [count, setCount] = useState(0);

  // useEffect(()=>{},[]) //Mounting phace
  // useEffect(()=>{},[condition]) //Updating phace
  // useEffect(()=>{return()},[condition]) //Unmounting phace

  const getdata = async () => {
    // const apidata = await axios.get("https://fakestoreapi.com/products");
    const apidata = await axios.get("https://fakestoreapi.com/carts");
    console.log("Apidata===>", apidata);
  };
  useEffect(() => {
    getdata();
  }, []);
  return <div>{/* <h1>{count}</h1> */}</div>;
};
