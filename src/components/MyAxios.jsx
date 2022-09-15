import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';

function MyAxios() {
    const[item,setItem]=useState({});
    const[change,setChange]=useState(1);

   const handleChange=(e)=>{
    setChange(e.target.value)
   }
    
    useEffect(()=>{

        axios.get(`https://jsonplaceholder.typicode.com/posts/${change}`)
        .then((response)=>setItem(response.data))
    },
    [change]
    );
  return (
    <div>
        <input type="text" value={change} onChange={handleChange} />
        <p className="">{item.title}</p>
    </div>
    
  )
}

export default MyAxios