import { Box,Button,Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDeleteForever } from "react-icons/md";
import { gethistoryapi} from '../services/allapi';
import { removehistoryapi } from '../services/allapi';


function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const result = await gethistoryapi();
      if (result.status === 200) {
        setHistory(result.data);
      }
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  const deletehistory = async (id) => { 
    try{
      await removehistoryapi(id)
      fetchHistory()
      
    }
    catch(error){ 
      console.log(error)
    }
  }
  

  return (
    <div>
      <h1 className='text-center my-5' >History</h1>
      <Link className='float-end me-5' style={{marginTop:'-90px'}} to={'/'}>Back</Link>

      <Box component="section" className='container-fluid '>
       <div className="row">
        {history.map((item)=>(

        <div className="col-md-4">
          <Paper elevation={3} sx={{my:5,p:5 ,textAlign:'center'}}>
            <div className="d-flex justify-content-between align-items-center"> 
              <h6>Review At:{item.timestamp}</h6>
              <Button onClick={()=>deletehistory(item?.id)} className='btn fs-4'><MdOutlineDeleteForever/></Button>
              
            </div>
            <div className='border rounded p-3'>
                <img width={'200px'}  height={'200px'}  src={item.resumeimg} alt="" />

              </div>

          </Paper>
        </div>
        ))}
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
       </div>
      </Box>
    </div>
  )
}

export default History