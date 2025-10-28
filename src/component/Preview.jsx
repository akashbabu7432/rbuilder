import { Divider } from '@mui/material'
import React from 'react'


function Preview() {
  return (
    <div style={{margin:'80px'}} className='shadow p-5 w-100 rounded text-center'>
      <h3>Name</h3>
      <h4>Job Title</h4>
      <p><span className='m-2'>Location</span>|<span className='m-2'>E-Mail</span>|<span className='m-2'>Mobile</span></p>
      <p>
        <a href="" className='m-2' target='_blank'>GITHUB</a>|
        <a href="" className='m-2' target='_blank'>LINKEDIN</a>|
        <a href="" className='m-2' target='_blank'>TWITTER</a>
      </p>
       <Divider sx={{fontSize:'25px'}}>SUMMARY</Divider>
       <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus, eius molestiae unde iusto ducimus libero dolore minima quia qui? Maiores odio tempora id temporibus voluptatum exercitationem pariatur. Explicabo, perspiciatis.
       Non eius commodi consequatur alias? Natus nobis iure eos dolores et deserunt eligendi nihil possimus officiis asperiores, obcaecati a autem cum odit consequuntur fugit dignissimos facere. Blanditiis porro sapiente error.
       Labore minima quibusdam dolorum neque mollitia cum autem, placeat, fuga vitae id tenetur optio quas porro illum voluptatibus, saepe nemo quos eius voluptate fugiat officia molestias hic. Impedit, sunt eligendi!
       Laboriosam aperiam fugiat molestiae, em tempora eos commodi? In eveniet iste dicta doloribus iure numquam odit non animi neque ex, molestias earum totam consectetur sit amet sint?</p>
       
       
       <Divider sx={{fontSize:'25px'}}>EDUCATION</Divider>
      <h4>Course name</h4>
      <p>
        <span className='m-2'>College</span>
        |<span className='m-2'>University</span>
        |<span className='m-2'>year of passout</span>
      </p>


    </div>
  )
}

export default Preview