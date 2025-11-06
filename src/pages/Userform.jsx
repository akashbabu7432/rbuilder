import React from 'react'
import UserInput from '../component/UserInput'
import Preview from '../component/Preview'
function Userform() {

    const [rdetails,setrdetails]=React.useState({
      username:"",
      jobTitle:"",
      location:"",
      email:"",
      mobile:"",
      github:"",
      linkedin:"",
      portfolio:"",
      course:"",
      college:"",
      university:"",
      passoutYear:"",
      jobType:"",
      company :"",
      cLoaction:"",
      duration:"",
      userSkills: [],
      summary:"",
  
    })

  return (
    <div className='container'>
      <div className="row p-5">
        <div className="col-lg-6">
          <UserInput rdetails={rdetails} setrdetails={setrdetails}/>
        </div>
        <div className="col-lg-6">
          {rdetails.username && 
          <Preview rdetails={rdetails}/>
          }
        </div>
      </div>
    </div>

  )
}

export default Userform