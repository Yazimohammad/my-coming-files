import React, { useEffect, useState } from "react";
import axios from "axios";

export const Hotels = () => {
  const [data, setdata] = useState([]);
  const [datacopy, setdatacopy] = useState([]);
  const [search, setsearch] = useState("");

  const getdata = async () => {
    const result = await axios.get(
      "http://fake-hotel-api.herokuapp.com/api/hotels"
    );
    console.log("result", result.data);
    setdatacopy(result.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    const filtered = datacopy.filter((item) => item.city.includes(search));
    setdata(filtered);
  }, [search]);

  return (
    <div>
      <h1>Hotels</h1>
      <tr>
        <input type="text" onChange={(e) => setsearch(e.target.value)} />
        Rating:-4 Start
        <input type="checkbox" />
        Rating:-3 Start
        <input type="checkbox" />
        <input type="range" />
        <select name="" id="">
          <option value="">select</option>
          <option value="">100 to 200</option>
          <option value="">200 to 300</option>
          <option value="">300 to 400</option>
        </select>
      </tr>
      <tr>
        {console.log("data", data)}
        {data.map((item) => {
          return (
            <div
              style={{
                height: "350px",
                width: "350px",
                border: "2px solid",
                textAlign: "center",
                float: "left",
                margin: "10px",
              }}
            >
              <h4>Name:-{item.name.substr(0, 10)}</h4>
              <h6>City:-{item.city}</h6>
              <h6>Details:-{item.description.substr(0, 30)}</h6>
              <p>Rating:-{item.rating}</p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWX4Y6kvydk20t0NdYzi_psDugmtmBOgq1w&usqp=CAU"
                alt=""
                height={"150px"}
                width={"280px"}
              />
              <h3
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  fontWeight: "bold",
                  display: "inline-block",
                  padding: "5px",
                  borderRadius: "15px",
                }}
              >
                ${item.price}
              </h3>
            </div>
          );
        })}
      </tr>
    </div>
  );
};
