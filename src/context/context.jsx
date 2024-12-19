import { createContext, useState } from "react";

export const Usercontext = createContext()

export const Userprovider = ({children})=>{
 
    const [currentUser, setCurrentUser] = useState(null)

    return <Usercontext.Provider value={{currentUser,setCurrentUser}} >
             {children}
            </Usercontext.Provider>
}


