import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Post from './Post.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Post name="Post 1" flag="true" />
  </React.StrictMode>,
)
