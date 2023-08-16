import React from 'react'
import Like from './Like'
import Comment from './Comment'

function Post(props) {
  return (
    <>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
    <Like />
    <Comment />
    </>
  )
}

export default Post