import React, { useEffect, useState } from 'react'

import Preview from "../component/Preview"
import { useParams } from 'react-router-dom'
import { getresumeapi } from '../services/allapi'
import { FaFileDownload } from "react-icons/fa";

import { RxUpdate } from "react-icons/rx";
import { FaBackward } from "react-icons/fa";
import { Link } from 'react-router-dom' 
import Edit from '../component/Edit';
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
  return (
    <>
    {/* <Header/> */}
    <div className='container my-5'>
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 col-12">
              <div className="d-flex justify-content-center align-items-center mt-5">
                <button className="btn fs-4"> <FaFileDownload/></button>
                <Edit rdetails={resume} setrdetails={setresume}/>
                <Link to={'/history'} className="btn fs-4"><RxUpdate/></Link>
                <Link to={'/resume'} className="btn fs-4"><FaBackward/></Link>

              </div>
                <Preview rdetails={resume} />
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Viewresume