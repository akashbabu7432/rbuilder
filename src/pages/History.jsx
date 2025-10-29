import { Box,Button,Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDeleteForever } from "react-icons/md";



function History() {
  return (
    <div>
      <h1 className='text-center my-5' >History</h1>
      <Link className='float-end me-5' style={{marginTop:'-90px'}} to={'/'}>Back</Link>

      <Box component="section" className='container-fluid '>
       <div className="row">
        <div className="col-md-4">
          <Paper elevation={3} sx={{my:5,p:5 ,textAlign:'center'}}>
            <div className="d-flex justify-content-between align-items-center"> 
              <h6>Review At:date</h6>
              <Button className='btn fs-4'><MdOutlineDeleteForever/></Button>
              
            </div>
            <div className='border rounded p-3'>
                <img width={'200px'}  height={'200px'}  src="https://d2slcw3kip6qmk.cloudfront.net/marketing/press/images/template-gallery/resume-professional@2x.jpeg" alt="" />

              </div>

          </Paper>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
       </div>
      </Box>
    </div>
  )
}

export default History