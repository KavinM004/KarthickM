import React, { useState } from 'react'
import Like from './Like'
import Comment from './Comment'
import Count from './Count';


function Post() {
    // let flag=false;
    const [flag,setFlag]= useState(true);
    const handleClickAdd=()=>{
        setFlag(false);
    }
    const handleClickRemove=()=>{
      setFlag(true);
  }
  return (
    <>
    <div className='post'> 
    <h1>Post Component</h1>
    {flag ? <button onClick={handleClickAdd}>Add</button> : <button onClick={handleClickRemove}>Remove</button>}
    <Like />
    <Comment />
    <Count />
    </div>
    </>
  )
}

export default Post