import React,{createContext, useState} from "react";

const DogContext = createContext();

function DogProvider({ children }){
    const [dogSound,setDogSound] = useState('vah..vauh...');
    return(
        <>
        <DogContext.Provider value={{dogSound,setDogSound}}>
            {children}
        </DogContext.Provider>
        </>
    )
}

export {DogContext,DogProvider}