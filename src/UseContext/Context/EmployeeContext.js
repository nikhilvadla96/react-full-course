import React from 'react'

export const EmployeeContext = React.createContext();

const employeeDetails = {
  firstName : 'Emma',
  lastName : 'Watson',
  email : 'watson.emma@gmail.com'
}

export const EmployeeContextProvider = ({children}) => {
  return (
    <EmployeeContext.Provider value={employeeDetails}>{children}</EmployeeContext.Provider>
  )
}
