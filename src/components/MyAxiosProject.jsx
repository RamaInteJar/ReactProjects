import React, { useState, useEffect } from "react";
import axios from "axios";

function MyAxiosProject() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setData(res.data));
  });
  return (
    <div className="bg-gray-300">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ml-8 mt-8 mr-8">
      {data.map((y) => {
        return (
          <div key={y.data} className="">
            <div className="bg-white mb-4 md:h-full w-full p-6 rounded">
            <img src={y.thumbnailUrl} alt="" className="w-full rounded mb-2"/>
            <div className="w-full pl-2 pr-2"><h3 className="mb-4 text-justify">{y.title}</h3></div>
            <button className=" w-full py-2 rounded bg-green-500">buy</button>
            </div>
          </div>
        );
      })}

      </div>
    </div>
  );
}

export default MyAxiosProject;
