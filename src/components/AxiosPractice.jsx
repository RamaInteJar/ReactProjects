import React, { useState, useEffect } from "react";
import axios from "axios";

function AxiosPractice() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) =>setData(res.data));
  },
  []
  );

  return (
    <div>
      <div>
        {data.map((x) => {
          return (
            <div key={x.id}>
              <div>
                <p>Id number:{x.id}</p>
                <p>Names:{x.name}</p>
                <p>Username:{x.username}</p>
                <p>Email:{x.email}</p>
                <p>Physical Adress:{x.address.street}</p>
                <p>Location:{x.address.geo.lat}</p>
                <p>Contact number:{x.phone}</p>
                <p>Website:{x.website}</p>
                <p>Company:{x.company.name}</p>
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AxiosPractice;
