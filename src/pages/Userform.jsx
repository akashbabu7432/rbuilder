import React from 'react'
import UserInput from '../component/UserInput'
import Preview from '../component/Preview'
function Userform() {
  return (
    <div className='container'>
      <div className="row p-5">
        <div className="col-lg-6">
          <UserInput/>
        </div>
        <div className="col-lg-6">
          <Preview/>
        </div>
      </div>
    </div>

  )
}

export default Userform