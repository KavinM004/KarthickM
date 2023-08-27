import React from 'react'

function GrandChild(props) {
  return (
    <>
    <h1>GrandChild Component</h1>
    <h4>RegNo List</h4>
    <ul>
        {props.regNo.map((num)=>(
            <li>{num}</li>
        ))}
    </ul>
    </>
  )
}

export default GrandChild