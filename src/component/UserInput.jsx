import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import { FaXmark } from "react-icons/fa6";
import { addresumeapi } from '../services/allapi';
import { useNavigate } from 'react-router-dom';


const steps = ['Basic', 'Contacts', 'Education','Experience','Skills & certification','Review'];

function UserInput({rdetails,setrdetails}) {
  const arryskill=['node js','react js' ,'flutter', 'java','python','c++'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  // console.log(rdetails)

  const skillRef = React.useRef()

  const navigate= useNavigate()
  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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


  const renderSteps=(stepCount)=>{
    switch(stepCount){
    case 0 : return(
        <div>
            <h3>Personal Details</h3>
            <div className='d-flex row p-3'>
                <TextField value={rdetails.username} onChange={e=>setrdetails({...rdetails,username:e.target.value})} id="standard-basic-name" label="Name" variant="standard" />
                <TextField value={rdetails.jobTitle} onChange={e=>setrdetails({...rdetails,jobTitle:e.target.value})} id="standard-basic-Job" label="Job Title" variant="standard" />
                <TextField value={rdetails.location} onChange={e=>setrdetails({...rdetails,location:e.target.value})} id="standard-basic-name-location" label="Location" variant="standard" />

            </div>
        </div>
    )

    case 1 : return(
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
    )

    case 2 : return(
        <div>
            <h3>Education</h3>
            
            <div className='d-flex row p-3'>
                <TextField value={rdetails.course} onChange={e=>setrdetails({...rdetails,course:e.target.value})} id="standard-basic-Course" label="Course Name" variant="standard" />
                <TextField value={rdetails.college} onChange={e=>setrdetails({...rdetails,college:e.target.value})} id="standard-basic-College" label="College Name" variant="standard" />
                <TextField value={rdetails.university} onChange={e=>setrdetails({...rdetails,university:e.target.value})} id="standard-basic-name-University" label="University" variant="standard" />
                <TextField value={rdetails.passoutYear} onChange={e=>setrdetails({...rdetails,passoutYear:e.target.value})} id="standard-basic-Passout" label="Year of Passout" variant="standard" />

            </div>
        </div>
    )

    case 3 : return(
        <div>
            <h3>Experience</h3>
            
            
            <div className='d-flex row p-3'>
                <TextField value={rdetails.jobType} onChange={e=>setrdetails({...rdetails,jobType:e.target.value})} id="standard-basic-Internship" label="Job or Internship" variant="standard" />
                <TextField value={rdetails.company} onChange={e=>setrdetails({...rdetails,company:e.target.value})} id="standard-basic-Company" label="Company Name" variant="standard" />
                <TextField value={rdetails.cLoaction} onChange={e=>setrdetails({...rdetails,cLoaction:e.target.value})} id="standard-basic-name-Company-location" label="Company Location" variant="standard" />
                <TextField value={rdetails.duration} onChange={e=>setrdetails({...rdetails,duration:e.target.value})} id="standard-basic-Duration" label="Duration" variant="standard" />

            </div>
        </div>
    )
    case 4 : return(
        <div>
            <h3>Skills</h3>
            <div className='d-flex align-items-center justify-content-between  p-3'>
              <input ref={skillRef} type="text" className='form-controll' placeholder='add skill' />
                <Button onClick={()=>addskills(skillRef.current.value)} variant="text">Add</Button>
            </div>
          
            <h4>Suggestions</h4>
            <div className="d-flex flex-wrap justify-content-between p-3 ">
              {
                arryskill.map((item,index)=>(
                   <Button onClick={()=>addskills(item)} key={index} variant="outlined" className='m-2'>{item}</Button>
                ))
                 
                
              }
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
    )

    case 5 : return(
        <div>
            <h3>Summary</h3>
            <div className='p-3 row'>
                <TextField  onChange={e=>setrdetails({...rdetails,summary:e.target.value})} id="standard-basic-summary" label="Write a short summary of yourself" variant="standard"  multiline rows={7} defaultValue={'Highly motivated and detail-oriented MERN Stack Developer with strong proficiency in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Experienced in developing responsive user interfaces with React and Material-UI, implementing RESTful APIs, and managing databases with MongoDB. Passionate about creating efficient, scalable, and user-friendly web applications with clean, maintainable code. Skilled in modern development practices including version control with Git, agile methodologies, and test-driven development. Committed to staying current with emerging technologies and best practices in web development to deliver innovative solutions.'}/>
  
            </div>
        </div>
    )
    default :return null
    }
      

  }

  const handleAddResume=async()=>{ 
    const {username,jobTitle,location}=rdetails
    if(!username && !jobTitle && !location){
      alert('Please fill all the fields')
    }else{
      console.log("Api call");
      try{
        const result=await addresumeapi(rdetails)
        console.log(result);
        if(result.status===201){
          alert("Resume added successfully")
          const {id}=result.data
          setTimeout(() => {
            navigate(`/resume/${id}/view`)
})
        }

      }catch(error){
        console.log(error)

      }
    }
  }


  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* render steps */}
          <Box>
            {renderSteps(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {activeStep === steps.length - 1 ? <Button onClick={handleAddResume}>Finish</Button> : <Button onClick={handleNext}>Next</Button>}
            
                        

          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInput