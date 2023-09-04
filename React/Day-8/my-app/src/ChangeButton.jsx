import React,{useContext} from "react";
import { AnimalContext } from "./AnimalContext";

function ChangeButton(){
    const {setAnimalSound}=useContext(AnimalContext);

    const changeSound=(update)=>{
        setAnimalSound(update);
    }

    return(
        <button onClick={()=>changeSound('Vafvauvau')}>Change</button>
    )
}

export default ChangeButton