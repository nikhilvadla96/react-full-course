import React from 'react'
import SubChildComponent from './SubChildComponent'

const ChildComponent = () => {
  return (
    <div>
        <h3>Inside ChildComponent</h3>
        <SubChildComponent/>
    </div>
  )
}

export default ChildComponent