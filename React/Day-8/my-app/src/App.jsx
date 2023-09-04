import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AnimalProvider } from './AnimalContext'
import AnimalSound from './AnimalSound'
import ChangeButton from './ChangeButton'

function App() {

  return (
    
      <AnimalProvider>
        <div>
          <AnimalSound />
          <ChangeButton />
        </div>
      </AnimalProvider>
    
  )
}

export default App
