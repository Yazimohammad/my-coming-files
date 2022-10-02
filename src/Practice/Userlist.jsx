import React, { useState, useEffect } from "react";

export const UserList = () => {
  const [data, setData] = useState([]);

  const getdata = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((result) => setData(result));
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <h1>BoiData</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
        {data.map((item) => (
            <tr>
              <th>{item.name}</th>
              <th>{item.email}</th>
              <th>{item.body}</th>
            </tr>
        ))}
      </table>
    </div>
  );
};
