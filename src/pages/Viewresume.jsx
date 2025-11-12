import React, { useEffect, useState } from 'react'

import Preview from "../component/Preview"
import { useParams } from 'react-router-dom'
import { addhistoryapi, getresumeapi } from '../services/allapi'
import { FaFileDownload } from "react-icons/fa";

import { RxUpdate } from "react-icons/rx";
import { FaBackward } from "react-icons/fa";
import { Link } from 'react-router-dom' 
import Edit from '../component/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
function Viewresume() {
  const {id}=useParams()
  console.log(id);
  const [resume,setresume]=useState({})
  useEffect(()=>{ getresumeDetails()},[])

  const getresumeDetails=async()=>{ 
    const result=await getresumeapi(id)
    console.log(result);
    if(result.status===200){
      setresume(result.data)
    }


  }

  const handledownload=  async()=>{
    // create pdf content
    const doc=new jsPDF();
    const preview=document.getElementById('preview')

    // screenshot of preview
    const canvas = await html2canvas(preview)
    // conver canvas to image
    const resumeimg= canvas.toDataURL('image/png')
    console.log(resumeimg)
    // add screenshot to pdf
    const pagewidth=doc.internal.pageSize.getWidth()
    const imgwidth=pagewidth-20
    const imgheight=canvas.height*imgwidth/canvas.width
    doc.addImage(resumeimg,'PNG',10,10,imgwidth,imgheight)
    // download pdf
    doc.save(`${resume.username} resume.pdf`)
    // local time data
    const localdate=new Date()
    // console.log(localdate)
    const timestamp=`${localdate.toLocaleDateString()},${localdate.toLocaleTimeString()}`
    // console.log(`${timestamp}`)
    try{
      await addhistoryapi({resumeimg,timestamp})
    }catch(err){
      console.log(err)
      
    }
  }
  return (
    <>
    {/* <Header/> */}
    <div className='container my-5'>
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 col-12">
              <div className="d-flex justify-content-center align-items-center mt-5">
                <button onClick={handledownload} className="btn fs-4"> <FaFileDownload/></button>
                <Edit rdetails={resume} setrdetails={setresume}/>
                <Link to={'/history'} className="btn fs-4"><RxUpdate/></Link>
                <Link to={'/resume'} className="btn fs-4"><FaBackward/></Link>

              </div>
                <div id='preview'>
                  <Preview rdetails={resume} />
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Viewresume