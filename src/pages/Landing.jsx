import React from 'react'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <>
      {/* landing */}
      <div style={{width:'100%', height:'100vh', background:"url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png ')", backgroundSize:'cover', backgroundAttachment:'fixed' }} className="container-fluid d-flex align-items-center justify-content-center"> 

      <div className='shadow border p-4 rounded mt-5 text-center ' style={{backgroundColor:'rgba(255,255,255,0.5)'}}>
        <h3>
          Designed to get hired.your <br />
          skills,your story .your next <br /> 
          job-all in one
        </h3>
        <Link to={'/resume'} className='btn btn-success'>Make Your Resume</Link>
      </div>

        
      </div>
      {/* tools */}
      <div className='my-5'>
        <h1 className='text-center'> Tools</h1>
        <div className="container row align-items-center justify-content-center">
          <div className="col-md-6 ">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>
            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className="col-md-6">
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" />
          </div>
        </div>

      </div>
      {/* img */}
      <div style={{width:'100%', height:'100vh', background:"url('https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg')", backgroundSize:'cover' ,backgroundPosition:'center', backgroundAttachment:'fixed'}} className='d-flex justify-content-center align-items-center'>

      </div>
      {/* testimoney */}
      <div>
        <h1 className='text-center my-5'>Testimony</h1>
        <div className="container row">
          <div className="col-md-5">
            <h2 className='my-5'>Trusted by professionals worldwide.</h2>
<p className='fs-5' style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>

<p className='fs-5' style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>

<p className='fs-5' style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
</div>
<div className="col-md-1"></div>
          <div className="col-md-6">
            <div className=" container row">
              <div className="col-md-3">
                <img style={{width:'100%'}} src="src\assets\team5.jpg" alt="" />
              </div>

              <div className="col-md-3">
                <img style={{width:'100%'}} src="src\assets\team5.jpg" alt="" />
              </div>

              <div className="col-md-3">
                <img style={{width:'100%'}} src="src\assets\team5.jpg" alt="" />
              </div>

              <div className="col-md-3">
                <img style={{width:'100%'}} src="src\assets\team5.jpg" alt="" />
              </div>

             
            </div>
            <div className="container row mt-3">

               <div className="col-md-3">
                <img style={{width:'100%'}} src="src\assets\team5.jpg" alt="" />
              </div> 

              <div className="col-md-3">
                <img style={{width:'100%'}} src="src\assets\team5.jpg" alt="" />
              </div> 

              <div className="col-md-3">
                <img style={{width:'100%'}} src="src\assets\team5.jpg" alt="" />
              </div> 

              <div className="col-md-3">
                <img style={{width:'100%'}} src="src\assets\team5.jpg" alt="" />
              </div> 
            </div>

            
            <div className="container row mt-3">

               <div className="col-md-3">
                <img style={{width:'100%'}} src="src\assets\team5.jpg" alt="" />
              </div> 

              <div className="col-md-3">
                <img style={{width:'100%'}} src="src\assets\team5.jpg" alt="" />
              </div> 

              <div className="col-md-3">
                <img style={{width:'100%'}} src="src\assets\team5.jpg" alt="" />
              </div> 

              <div className="col-md-3">
                <img style={{width:'100%'}} src="src\assets\team5.jpg" alt="" />
              </div> 
            </div>
             

          </div>
        </div>
      </div>
    </>
  )
}

export default Landing