import { Children } from "react";
import { useState } from "react";
import { createContext } from "react";



export  const  Auths=createContext();

export const Authorization=({children})=>{
    const [login,setLogin]=useState(false);
    return(
        <Auths.Provider value={{login,setLogin}}>
            {children}
        </Auths.Provider>
    )    
}