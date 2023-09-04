import React,{createContext,useState} from "react";

const AnimalContext=createContext();

function AnimalProvider({children}){
    const [animalSound,setAnimalSound]=useState("Meow");
    const [age,setAge]=useState("21");
    return(
        
        <AnimalContext.Provider value={{animalSound,setAnimalSound,age,setAge}}>
            {children}
        </AnimalContext.Provider>
        
    )
}

export {AnimalContext,AnimalProvider}