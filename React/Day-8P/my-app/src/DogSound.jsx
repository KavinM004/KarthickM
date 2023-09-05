import React, { useContext } from 'react'
import { DogContext } from './DogContext'

function DogSound() {
    const {dogSound}=useContext(DogContext);
  return (
    <>
    <h4>The Dog Sound : {dogSound}</h4>
    </>
  )
}

export default DogSound