import React, { useState } from 'react'

const ParentComponent = () => {

    const [userDetails,setUserDetails] = useState({
        firstName :'Emma',
        lastName:'Watson',
        email:'emmaWatson@gmail.com'
    })
  return (
    <div>
        <h1>Parent Component</h1>
        <ChildCompanent userDetails={userDetails}/>
    </div>
  )
}

const ChildCompanent = (props) =>{
    return(
        <div>
              <h3>Child Component</h3>
              <SubChildComponent details={props.userDetails}/>
        </div>
    )
}

const SubChildComponent = (props)=>{
    const {details} = props
    return(
        <div>
            <h5>Sub Child Component</h5>
            <p>FirstName : {details.firstName}</p><br></br>
            <p>LastName : {details.lastName}</p><br></br>
            <p>Email : {details.email}</p>
        </div>
    )
}

export default ParentComponent