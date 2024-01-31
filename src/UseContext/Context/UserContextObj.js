import React from 'react'

const userObj ={
    name:'Sathya',
    email:'sathya@gmail.com'
}

export const UserContextObj = React.createContext();

export const UserContextObjProvider = ({children}) =>{
   return(
    <UserContextObj.Provider value={userObj}>{children}</UserContextObj.Provider>
   )
}