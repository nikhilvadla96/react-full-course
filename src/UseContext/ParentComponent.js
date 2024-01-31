import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const employeeDetails = {
        firstName : 'Emma',
        lastName : 'Watson',
        email : 'watson.emma@gmail.com'
    }
  return (
    <div>
        <h1>Inside ParentComponent</h1>
        <ChildComponent/>
    </div>
  )
}

export default ParentComponent