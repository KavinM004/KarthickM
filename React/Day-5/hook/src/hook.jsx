import React,{useState,useEffect} from 'react'

function hook() {

    const [count,setCount]= useState(0);

    useEffect(()=>{
        console.log("Component Mounted/Loaded!!");
    },[]);

    useEffect(()=>{
        console.log("Component updated!!!");
    })
  return (
    <div>
        <h1>Hook</h1>
        <p>Count:{count}</p>
        <button onClick={()=>{
            setCount(count+1);
        }}></button>
    </div>
  )
}

export default hook