import React, { useRef } from 'react'
import { FaRegEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { FaXmark } from "react-icons/fa6";
import { updateresumeapi } from '../services/allapi';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  maxHeight:'80vh',
  overflowY:'scroll',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Edit({rdetails,setrdetails}) {

    const [open, setOpen] = React.useState(false);
     const skillRef = useRef()
     const addskills =(skill)=>{
    if(rdetails.userSkills.includes(skill)){

      alert("skill already added")
    }else{
      setrdetails({...rdetails,userSkills:[...rdetails.userSkills,skill]})
      skillRef.current.value = ""

    }

  }

  const removeSkill =(skill)=>{
    setrdetails({...rdetails,userSkills:rdetails.userSkills.filter(item=>item!==skill)})

  }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleresumeupdate=async()=>{
      const {id ,username ,jobTitle,location}=rdetails
      if(!id && !username && !jobTitle && !location){
        alert("Please fill all the fields")
      }else{
        console.log('Api call');
        try{
          const result= await updateresumeapi(id,rdetails)
          console.log(result);
          if (result.status===200){
            alert("Resume Updated Successfully")
            handleClose()
          }

        }catch(err){
          console.log(err);
        }
      }
    }
  return (
    <div>
        <button className="btn fs-4 " onClick={handleOpen}> <FaRegEdit/></button>

         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal */}
            <div>
                        <h3>Personal Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField value={rdetails.username} onChange={e=>setrdetails({...rdetails,username:e.target.value})} id="standard-basic-name" label="Name" variant="standard" />
                            <TextField value={rdetails.jobTitle} onChange={e=>setrdetails({...rdetails,jobTitle:e.target.value})} id="standard-basic-Job" label="Job Title" variant="standard" />
                            <TextField value={rdetails.location} onChange={e=>setrdetails({...rdetails,location:e.target.value})} id="standard-basic-name-location" label="Location" variant="standard" />
            
                        </div>
            </div>
            {/* 2 */}
            <div>
                        <h3>Contacts</h3>
                        <div className='d-flex row p-3'>
                            <TextField value={rdetails.email} onChange={e=>setrdetails({...rdetails,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
                            <TextField value={rdetails.mobile} onChange={e=>setrdetails({...rdetails,mobile:e.target.value})} id="standard-basic-Phone" label="Phone Number" variant="standard" />
                            <TextField value={rdetails.github} onChange={e=>setrdetails({...rdetails,github:e.target.value})} id="standard-basic-name-Github" label="Github Link" variant="standard" />
                            <TextField value={rdetails.linkedin} onChange={e=>setrdetails({...rdetails,linkedin:e.target.value})} id="standard-basic-Profile-Link" label="Profile Link" variant="standard" />
                            <TextField value={rdetails.portfolio} onChange={e=>setrdetails({...rdetails,portfolio:e.target.value})} id="standard-basic-name-Portfolio-Link" label="Portfolio Link" variant="standard" />
                        </div>
            
            </div>
            {/* 3 */}
            <div>
                        <h3>Education</h3>
                        
                        <div className='d-flex row p-3'>
                            <TextField value={rdetails.course} onChange={e=>setrdetails({...rdetails,course:e.target.value})} id="standard-basic-Course" label="Course Name" variant="standard" />
                            <TextField value={rdetails.college} onChange={e=>setrdetails({...rdetails,college:e.target.value})} id="standard-basic-College" label="College Name" variant="standard" />
                            <TextField value={rdetails.university} onChange={e=>setrdetails({...rdetails,university:e.target.value})} id="standard-basic-name-University" label="University" variant="standard" />
                            <TextField value={rdetails.passoutYear} onChange={e=>setrdetails({...rdetails,passoutYear:e.target.value})} id="standard-basic-Passout" label="Year of Passout" variant="standard" />
            
                        </div>
            </div>
            {/* 4 */}
            <div>
                        <h3>Experience</h3>
                        
                        
                        <div className='d-flex row p-3'>
                            <TextField value={rdetails.jobType} onChange={e=>setrdetails({...rdetails,jobType:e.target.value})} id="standard-basic-Internship" label="Job or Internship" variant="standard" />
                            <TextField value={rdetails.company} onChange={e=>setrdetails({...rdetails,company:e.target.value})} id="standard-basic-Company" label="Company Name" variant="standard" />
                            <TextField value={rdetails.cLoaction} onChange={e=>setrdetails({...rdetails,cLoaction:e.target.value})} id="standard-basic-name-Company-location" label="Company Location" variant="standard" />
                            <TextField value={rdetails.duration} onChange={e=>setrdetails({...rdetails,duration:e.target.value})} id="standard-basic-Duration" label="Duration" variant="standard" />
            
                        </div>
            </div>
            {/* 5 */}
            <div>
            <h3>Skills</h3>
            <div className='d-flex align-items-center justify-content-between  p-3'>
              <input ref={skillRef} type="text" className='form-controll' placeholder='add skill' />
                <Button onClick={()=>addskills(skillRef.current.value)} variant="text">Add</Button>
            </div>
          
            
            <h4>Added Skills</h4>
            <div className="d-flex flex-wrap justify-content-between p-3 ">
              {
                rdetails.userSkills?.length>0?
                 rdetails.userSkills.map((item,index)=>(
                  <Button  key={index} variant="contained">{item}<FaXmark onClick={()=>removeSkill(item)} className='mx-2 cursor-pointer'/></Button>
              
                ))
                :
                <p>no skill are added yet</p>
              }
            </div>

              
            
            </div>
            {/* 6 */}
            <div>
                        <h3>Summary</h3>
                        <div className='p-3 row'>
                            <TextField  onChange={e=>setrdetails({...rdetails,summary:e.target.value})} id="standard-basic-summary" label="Write a short summary of yourself" variant="standard"  multiline rows={7} defaultValue={'Highly motivated and detail-oriented MERN Stack Developer with strong proficiency in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Experienced in developing responsive user interfaces with React and Material-UI, implementing RESTful APIs, and managing databases with MongoDB. Passionate about creating efficient, scalable, and user-friendly web applications with clean, maintainable code. Skilled in modern development practices including version control with Git, agile methodologies, and test-driven development. Committed to staying current with emerging technologies and best practices in web development to deliver innovative solutions.'}/>
              
                        </div>
            </div>
            {/* 7 */}
            <div className='text-center'>
                <Button onClick={handleresumeupdate} className='btn btn-warning'>Update</Button>
            </div>
            
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit