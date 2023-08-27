import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './Index';

function App() {
  const [count,setCount]= useState(0);
  const buttonHandle=()=>{
    setCount(count+1);
  }
  return (
    <>
    <div>
      <h1>App Component</h1>
      <p>count : {count}</p>
      <button onClick={buttonHandle}>Show/Hide</button>
      {count < 5 ? <Index /> : <div>Index Is unmounted...</div>}
      </div>
    </>
  )
}

export default App
