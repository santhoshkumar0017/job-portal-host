import React, { useEffect, useState } from 'react'
import { experienceLevelofJobs, fourthcase, listofJobs, sectorJobs } from '../Service/ServiceScript';
import { useNavigate } from 'react-router-dom';


function ListofJobs() {

  
  const [jobs,setJobs]=useState([]);
  const [expFilt,setExpFilt] =useState("all");
  const [sectFilt,setSectFilt]=useState("all");

  const navigator=useNavigate();

  useEffect(() =>{
    listJobs();
  },[expFilt,sectFilt])

  function listJobs(){
    
      
    if(expFilt=='all' && sectFilt=='all'){

      listofJobs().then((response) =>{
        setJobs(response.data)
      }).catch(err => console.log(err))

    }

    else if(expFilt!='all' && sectFilt=='all'){

       experienceLevelofJobs(expFilt.toUpperCase()).then((response) =>{
        setJobs(response.data)
      }).catch(err => console.log(err))

    }
    else if(expFilt=='all' && sectFilt!='all'){

     const sectorValue = sectFilt === "non-it" ? "NONIT" : sectFilt.toUpperCase();
          sectorJobs(sectorValue).then((response) =>{
        setJobs(response.data)
      }).catch(err => console.log(err))

    }
    
    else{

     const sectorValue = sectFilt === "non-it" ? "NONIT" : sectFilt.toUpperCase();
      fourthcase(expFilt.toUpperCase(),sectorValue).then((response) =>{
        setJobs(response.data)
      }).catch(err => console.log(err))

    }


  }

  function jobApply(id){
    navigator('/api/jobApplication/'+id)
  }
 
  function addJob(){
    navigator('/add-job')
  }

  return (
    <>

     <div className='container '>

      <div className='row'>
           
           <div className='card mt-4 rounded-pill shadow-lg'>
             
           <div className="card-body">
                    
      <div className=' d-flex  justify-content-center'>
                  
                  <h6 className='text-center me-4 mt-2'>Experience Level</h6>
                      
                        <select 
                          className="form-select w-auto"
                          id='experienceLevel'
                          onChange={e => setExpFilt(e.target.value)}
                        >
                          <option value="all">All</option>
                          <option value="experience">Experience</option>
                          <option value="fresher">Fresher</option>
                        </select>


                 <h6 className='text-center ms-4 mt-2'>Sector</h6>       
                        <select 
                          className="form-select w-auto ms-2"
                          id='sector'
                          onChange={e => setSectFilt(e.target.value)}
                        >
                          <option value="all">All</option>
                          <option value="it">IT</option>
                          <option value="non-it">Non-IT</option>
                        </select>

            </div>


            </div>


           </div>

      </div>

    </div>
  
    
    <div>
        
        <button className='btn btn-warning ms-5 mt-3' onClick={addJob}>Add New Job</button>

    </div>



    <div className='container mt-5'>

     <div className='row'>
     
      {
        

          jobs.map((job) => (
            <div 
              key={job.id} 
              className="card m-5 col-3  rounded shadow-lg"
              style={{ minWidth: "300px" }}
            >
              <div className="card-body">
                <h5 className="card-title">{job.companyName}</h5>
                <p className="card-text">
                  <strong>Role:</strong> {job.role} <br />
                  <strong>Experience Level:</strong> {job.experienceLevel} <br />
                  <strong>Job Description:</strong> {job.description}
                </p>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary" onClick={() =>jobApply(job.id)}>Apply</button>
                </div>
              </div>
            </div>
          ))

       
}           
         </div>
         </div>
          
     
      
    
    </>
  )
}

export default ListofJobs