import { createContext, useState } from "react";

export const Usercontext = createContext()

export const Userprovider = async({Children})=>{
 
    const [currentUser, setCurrentUser] = useState(null)

    return <Usercontext.Provider value={{currentUser,setCurrentUser}} >
             {Children}
            </Usercontext.Provider>
}


