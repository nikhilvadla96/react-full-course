import React from 'react'

export const MainContext = React.createContext();

const MainDetails = [
    {
       name :'Srikanth',
       age:25,
       color: 'black'
    },
    {
        name :'Suresh',
        age:26,
        color: 'brown'

    }
]

 export const MainContextProvider = ({children}) => {
  return (
     <MainContext.Provider value={MainDetails}>{children}</MainContext.Provider>
  )
}
