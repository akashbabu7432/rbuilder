import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div  className='container-fluid d-flex flex-column justify-content-center align-items-center' >
      <img style={{height:'80vh'}} className='img-fluid w-80' width={'40%'} src="src\assets\—Pngtree—purple stereo 404 page loss_4774965.png" alt="" />
      <Link to={'/'} className='btn btn-success'>go to home</Link>
    </div>
  )
}

export default Pnf