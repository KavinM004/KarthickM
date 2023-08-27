import React, { useState } from 'react'

function Count() {
    const [count,setCount]=useState(0);
    const countEvent=()=>{
        setCount(count+1);
        }
    
  return (
    
    <>
    <button onClick={countEvent}>Count : {count}</button>
    </>
  )
}

export default Count