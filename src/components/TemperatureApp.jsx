import React,{useState} from 'react'



function TemperatureApp() {
    const[tempValue,setTempValue]=useState(10)
    const[tempColor,setTempColor]=useState("cold")

const tempIncrement=()=>{
    setTempValue(tempValue+1)
    if(tempValue>=15){
        setTempColor("hot")
    }
}

const tempDecrement=()=>{
    setTempValue(tempValue-1)
    if(tempValue< 15){
        setTempColor("cold")
    }
    
}

  return (
    <div>
        <div className=" h-96 w-72 bg-sky-800 ml-8 mt-9 p-4 rounded-2xl">
            <div className={`${tempColor? "bg-sky-800" : "bg-red-500"}h-40 w-40  ml-10 rounded-full border-2 text-center text-white text-3xl p-16 hot cold`}>{tempValue}°C</div>
            <div className="mt-24 ml-10">
        <button onClick={()=>tempIncrement()} className={` h-16 w-16 bg-gray-600 mr-10 rounded-full text-white text-lg border-2 cursor-pointer`} >+</button>
            <button onClick={()=>tempDecrement()} className="h-16 w-16 bg-gray-600 rounded-full text-white text-lg border-2 cursor-pointer">-</button>
            </div>
        </div>
    </div>
  )
}

export default TemperatureApp

