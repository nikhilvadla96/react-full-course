import React, {useContext} from 'react'
import { EmployeeContext } from './Context/EmployeeContext';
import { MainContext } from './Context/MainContext';

const SubChildComponent = () => {

    const data = useContext(EmployeeContext)
    const mainContext  = useContext(MainContext)
    console.log(mainContext);

    const {firstName , lastName , email} = data;
  return (
    <div>
        <h5>Inside SubChildComponent</h5>
        <strong>FirstName : {firstName}</strong><br/>
        <strong>LastName : {lastName}</strong><br/>
        <strong>Email : {email}</strong><br/>
        <span>{mainContext[0].color}</span>
    </div>
  )
}

export default SubChildComponent