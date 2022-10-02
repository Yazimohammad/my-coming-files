import React, { useState, useEffect } from "react";
import axios from "axios";
export const GetdataFromJSON = () => {
  const [getdata, setgetData] = useState([]);

  const GetdataFromJSON = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(result.data);
    setgetData(result.data);
  };

  useEffect(() => {
    GetdataFromJSON();
  }, []);
  return (
    <div>
      {getdata.map((item) => {
        return (
          <div>
            <h3>UserID:-{item.userId}</h3>
            <h4> ID:-{item.id}</h4>
            <p>Title:-{item.title}</p>
            <p>Body:-{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};
