import React,{useEffect, useState} from 'react'

function FetchData() {

    const[user,setUser]=useState([]);


    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json()).then((data)=>setUser(data))

    },
    []
    );
  return (

    <div>
        {user.map((y)=>{
            return(
                <div key={y.id}>
                    <p>Name is: {y.name}</p><br/>
                    <p>My username is: {y.username}</p> <br />
                    <p>My email is: {y.email}</p><br/>
                    <p>My city is: {y.address.city}</p>
                </div>
            )
        })}
    </div>
  )
}

export default FetchData