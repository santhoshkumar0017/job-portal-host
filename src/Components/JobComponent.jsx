import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createJob } from '../Service/ServiceScript';

function JobComponent() {

    const[companyName,setCompanyName]=useState("");
    const[role,setRole]=useState("");
    const[sector,setSector]=useState("");
    const[experienceLevel,setExpLevel]=useState("");
    const[description,setDescription]=useState("");

    const[addJobError,setAddJobError]=useState({
        companyName:"",
        role:"",
        sector:"",
        experienceLevel:"",
        description:"", 
    })

    const navigate=useNavigate();

    function createNewJob(e){
        e.preventDefault();
      
      if(validationForm()){
         
        const createdJob={
            companyName,
            role,
            sector,
            experienceLevel,
            description
        }

        createJob(createdJob).then((respone) =>{
            navigate('/')
        }).catch(err => console.log(err))

      }

    }


    function validationForm(){
        let valid=true;
        const errorCopy={...addJobError}

        if(companyName.trim()){
          errorCopy.companyName=""
        }
        else{
            errorCopy.companyName="Enter the company name"
            valid=false;
        }

         if(role.trim()){
          errorCopy.role=""
        }
        else{
            errorCopy.role="Enter the role"
            valid=false;
        }

         if(sector.trim()){
          errorCopy.sector=""
        }
        else{
            errorCopy.sector="Enter the sector"
            valid=false;
        }

         if(experienceLevel.trim()){
          errorCopy.experienceLevel=""
        }
        else{
            errorCopy.experienceLevel="Enter the Experience level"
            valid=false;
        }

        if(description.trim()){
          errorCopy.description=""
        }
        else{
            errorCopy.description="Enter the job description"
            valid=false;
        }

        setAddJobError(errorCopy);
        return valid;

    }

  return (
    <>
         <div className='container d-flex justify-content-center    '>
        
        <div className='row'>
           
          <div id='job-application' className='card  mt-5  shadow-lg'>

            <h2 className='card-title text-center'>Add New Job</h2>
                
            <div className='card-body '>

          
                
            <form  action="">
               
                <div className="form-group mb-3">
                    <label className="form-label">Company name:</label>
                    <input
                        type="text"
                       
                        placeholder="Enter the company name"
                        name="companyName"  value={companyName}

                        className={`form-control  ${addJobError.companyName ? 'is-invalid':''} `}
                        
                        onChange={(e) =>setCompanyName(e.target.value)}/>

                        {addJobError.companyName && <div className='invalid-feedback'> {addJobError.companyName}
                       </div>}
                </div>

                 <div className="form-group mb-3">
                    <label className="form-label">Role:</label>
                    <input
                        type="text"
                       
                        placeholder="Enter the role "
                        name="role"  value={role}

                        className={`form-control  ${addJobError.role ? 'is-invalid':''} `}
                        
                        onChange={(e) =>setRole(e.target.value)}/>

                        {addJobError.role && <div className='invalid-feedback'> {addJobError.role}
                       </div>}
                </div>

                <div className="form-group mb-3">
                    <label className="form-label">Sector:</label>
                    <select
                        name="sector"
                        value={sector}  
                        className={`form-control ${addJobError.sector ? 'is-invalid' : ''}`}
                        onChange={(e) => setSector(e.target.value)} 
                    >
                        <option value="">-- Select Sector --</option>
                        <option value="IT">IT</option>
                        <option value="NON_IT">NON_IT</option>
                    </select>

                    {addJobError.sector && (
                        <div className="invalid-feedback">{addJobError.sector}</div>
                    )}
                 </div>

               <div className="form-group mb-3">
                    <label className="form-label">Experience level:</label>
                    <select
                        name="experienceLevel"
                        value={experienceLevel}  
                        className={`form-control ${addJobError.experienceLevel ? 'is-invalid' : ''}`}
                        onChange={(e) => setExpLevel(e.target.value)} 
                    >
                        <option value="">-- Select Experience Level --</option>
                        <option value="FRESHER">Fresher</option>
                        <option value="EXPERIENCE">Experience</option>
                    </select>

                    {addJobError.experienceLevel && (
                        <div className="invalid-feedback">{addJobError.experienceLevel}</div>
                    )}
                 </div>

                  <div className="form-group mb-3">
                    <label className="form-label">Description:</label>
                    <input
                        type="text"
                       
                        placeholder="Enter the job description"
                        name="description"  value={description}

                        className={`form-control  ${addJobError.description ? 'is-invalid':''} `}
                        
                        onChange={(e) =>setDescription(e.target.value)}/>

                        {addJobError.description && <div className='invalid-feedback'> {addJobError.description }
                       </div>}
                </div>


                <button className='btn btn-success' onClick={createNewJob}>Submit</button>


            </form>

        </div>

        </div>

        </div>

        </div>

    </>
  )
}

export default JobComponent