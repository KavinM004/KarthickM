import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DogProvider } from './DogContext'
import DogSound from './DogSound'
import ChangeDogSound from './ChangeDogSound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DogProvider>
        <DogSound></DogSound>
        <ChangeDogSound />
      </DogProvider>
    </>
  )
}

export default App
