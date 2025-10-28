import React from 'react'
import { CiFileOn } from "react-icons/ci";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Resumegen() {
  return (
    <div>
      <h3 className='text-center'>Create a Job Winning Resume In Minutes</h3>
      <div className='container row justify-content-center'>
        <div className='col-md-2'></div>
        <div className='col-md-4 shadow d-flex justify-content-center align-items-center border rounded'>
          <p className='d-flex justify-content-center align-items-center  flex-column mt-5'>
            <CiFileOn className='fs-1 m-2'/>
            
              <h4>Add Your Information</h4>
              <p>Add pre-written examples for each section</p>
              <h4>Step 1</h4>
          </p>
          
        </div>
        <div className="col-1"></div>
        <div className='col-1'></div>
        <div className='col-md-4 shadow d-flex justify-content-center align-items-center border rounded '>
          <p className='d-flex justify-content-center align-items-center  flex-column mt-5'>
            <FaFileDownload className='fs-1 m-2'/>
            
              <h4>Download Your Resume</h4>
              <p>Download Your Resume</p>
              <h4>Step 2</h4>
          </p>
        </div>

        <div className="col-1">

        </div>

        
        
      </div>
      <div className='text-center mt-5 mb-5'>
          <Link to={'/userform'} className='btn btn-success'> lets start</Link>
          </div>
    </div>
  )
}

export default Resumegen