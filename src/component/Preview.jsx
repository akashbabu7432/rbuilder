import { Divider,Button } from '@mui/material'
import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";


function Preview({rdetails}) {
  
  return (
    <div style={{margin:'80px'}} className='shadow p-5 w-100 rounded text-center'>
      <h3>{rdetails?.username}</h3>
      <h4>{rdetails?.jobTitle}</h4>
      <p><span className='m-2'>{rdetails?.location}</span>|<span className='m-2'>{rdetails?.email}</span>|<span className='m-2'>{rdetails?.mobile}</span></p>
      <p>
        <a href={rdetails?.github} className='m-2' target='_blank'>GITHUB</a>|
        <a href={rdetails?.linkedin} className='m-2' target='_blank'>LINKEDIN</a>|
        <a href={rdetails?.portfolio} className='m-2' target='_blank'>TWITTER</a>
      </p>
       <Divider sx={{fontSize:'25px'}}>SUMMARY</Divider>
       <p style={{textAlign:'justify'}}>{rdetails?.summary}</p>
       
       
       <Divider sx={{fontSize:'25px'}}>EDUCATION</Divider>
      <h4>{rdetails?.course} </h4>
      <p>
        <span className='m-2'>{rdetails?.college} </span>
        |<span className='m-2'>{rdetails?.university} </span>
        |<span className='m-2'>{rdetails?.passoutYear} </span>
      </p>

       <Divider sx={{fontSize:'25px'}}>Proffessional Experience</Divider>
      <h4>{rdetails?.jobType}</h4>
      <p>
        <span className='m-2'>{rdetails?.company}</span>
        |<span className='m-2'>{rdetails?.cLoaction}</span>
        |<span className='m-2'>{rdetails?.duration}</span>
      </p>

      <Divider sx={{fontSize:'25px ' ,marginBottom:'10px'}}>Skills</Divider>
      <div className="d-flex flex-wrap justify-content-between p-3 ">
        {
          rdetails?.userSkills?.map((item)=>(
          <Button key={item}  variant='contained' className='m-1'>{item}</Button>
          ))
        }
      </div>
      



    </div>
  )
}

export default Preview