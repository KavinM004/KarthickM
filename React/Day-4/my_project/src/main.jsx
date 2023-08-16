import React from 'react'
import ReactDOM from 'react-dom/client'
import Post from './Post'
import Like from './Like'
import Comment from './Comment'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </React.StrictMode>,
)
