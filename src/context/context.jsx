import { createContext, useState } from "react";
import { BASE_URL } from '../services/helper';

export const Usercontext = createContext()

export const Userprovider = ({children})=>{
 

    const fetchCurrentUserDetails = async()=>{
        let response = await fetch(`${BASE_URL}/api/user/userDetails`,{
          method: "GET",
          credentials: "include"
        })
        const data = await response.json()
        return data.data
      }

      const name = "sdd"
   

    return <Usercontext.Provider value={{fetchCurrentUserDetails,name}} >
             {children}
            </Usercontext.Provider>
}


