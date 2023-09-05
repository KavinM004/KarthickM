import React, { useContext } from 'react'
import { DogContext } from './DogContext';

function ChangeDogSound() {
    const {setDogSound}=useContext(DogContext);

    const changeSound=(newSound)=>{
        setDogSound(newSound);
    }
  return (
    <>
    <button onClick={()=>changeSound('bark')}>Change</button>
    </>
  )
}

export default ChangeDogSound