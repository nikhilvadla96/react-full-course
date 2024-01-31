import React, { useContext } from 'react'
import { UserContextObj } from './Context/UserContextObj'

const UserContext = () => {
    const uerObj = useContext(UserContextObj)
  return (
    <div>{uerObj.name}  {uerObj.email}</div>
  )
}

export default UserContext