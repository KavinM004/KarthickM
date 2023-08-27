import React from 'react'
import Child from './Child';

function Parent() {
    const regNo=["Kavin M","Karthick M","Nirmal Kumar M","Karthi G"];
  return (
    <>
        <h1>Parent Component</h1>
        <h4>RegNo Lists</h4>
        <Child regNo={regNo}/>
    </>
  )
}

export default Parent