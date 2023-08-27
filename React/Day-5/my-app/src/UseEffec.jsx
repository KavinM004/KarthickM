import React,{useState,useEffect} from 'react'

function UseEffec() {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("Component Mounted/Loaded!!");
        return ()=>{
          console.log("Component Unmounted");
        }
    },[]);

    useEffect(()=>{
      console.log("Component updated");
      return ()=>{
        console.log("Component Updated Cleanup");
      }
    })
  return (
    <>
    <h1>UseEffect</h1>
    <p>Count :{count}</p>
    <button onClick={()=>setCount(count+1)}>Count</button>
    </>
  )
}

export default UseEffec