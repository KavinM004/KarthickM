import React from 'react'
import GrandChild from './GrandChild'

function Child(props) {
  return (
    <>
    <h1>Child Component</h1>
    <ol>
        {props.regNo.map((num)=>(<li>{num}</li>))}
    </ol>
    <GrandChild regNo={props.regNo}/>
    </>
  )
}

export default Child