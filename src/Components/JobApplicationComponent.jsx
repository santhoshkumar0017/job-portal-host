import React, { useEffect, useState } from 'react'
import { applyJob ,jobId } from '../Service/ServiceScript';
import { useNavigate , useParams} from 'react-router-dom';


function JobApplicationComponent() {


    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phoneNumber,setPhNumber]=useState("");
    const[companyName,setCompanyName]=useState("");
    const[role,setRole]=useState("");
    const[experienceLevel,setExpLevel]=useState("")

    const navigate=useNavigate();

    const {id}=useParams();


    const[errors,setErrors]=useState({
      name:"",
      email:"",
      phoneNumber:"",
      companyName:"",
      role:"",
      experienceLevel:""
})
   
   
   function jobApply(e){

     e.preventDefault();

     if(validationForm()){

      const jobApplicationObj={
        name,
        email,
        phoneNumber,
        companyName,
        role,
        experienceLevel 
      }

      applyJob(jobApplicationObj).then((response) =>{
           navigate("/")
      }).catch(err => console.log(err))}



   }


   function validationForm(){

    let valid=true;
    const errorCopy={...errors}

    if(name.trim()){
      errorCopy.name="";
    }
    else{
      errorCopy.name="Enter name is required";
      valid=false;
    }
   
    if(email.trim()){
      errorCopy.email="";
    }
    else{
      errorCopy.email="Enter email is required";
       valid=false;
    }

    if(phoneNumber.trim()){
      errorCopy.phoneNumber="";
    }
    else{
      errorCopy.phoneNumber="Enter Phone number is required";
       valid=false;
    }

    if(companyName.trim()){
      errorCopy.companyName="";
    }
    else{
      errorCopy.companyName="Enter Company name is required";
       valid=false;
    }

     if(role.trim()){
      errorCopy.role="";
    }
    else{
      errorCopy.role="Enter role is required";
       valid=false;
    }

     if(experienceLevel.trim()){
      errorCopy.experienceLevel="";
    }
    else{
      errorCopy.experienceLevel="Enter Experience level is required";
       valid=false;
    }

    setErrors(errorCopy);
    return valid;

   }

  useEffect(() =>{
 
    if(id){
    jobId(id).then((response) =>{
      setCompanyName(response.data.companyName)
      setExpLevel(response.data.experienceLevel)
      setRole(response.data.role)
    }).catch(err  => console.log(err))
  }

  },[id])

  return (
    <>
     <div className='container d-flex justify-content-center    '>
        
        <div className='row'>
           
          <div id='job-application' className='card  mt-5  shadow-lg'>

            <h2 className='card-title text-center'>Job Application</h2>
                
            <div className='card-body '>

          
                
            <form  action="">
               
                <div className="form-group mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                       
                        placeholder="Enter the name"
                        name="name"  value={name}

                        className={`form-control  ${errors.name ? 'is-invalid':''} `}
                        
                        onChange={(e) =>setName(e.target.value)}/>

                        {errors.name && <div className='invalid-feedback'> {errors.name}</div>}
                </div>


                 <div className="form-group mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="text"
                       
                        placeholder="Enter the email"
                        name="email"  value={email}

                        className={`form-control  ${errors.email ? 'is-invalid':''} `}
                        
                        onChange={(e) =>setEmail(e.target.value)}/>

                        {errors.email && <div className='invalid-feedback'> {errors.email}</div>}
                </div>

                 <div className="form-group mb-3">
                    <label className="form-label">Phone number:</label>
                    <input
                        type="text"
                       
                        placeholder="Enter the phone number"
                        name="name"  value={phoneNumber}

                        className={`form-control  ${errors.phoneNumber ? 'is-invalid':''} `}
                        
                        onChange={(e) =>setPhNumber(e.target.value)}/>

                        {errors.phoneNumber && <div className='invalid-feedback'> {errors.phoneNumber}</div>}
                </div>

                 <div className="form-group mb-3">
                    <label className="form-label">Company name:</label>
                    <input
                        type="text"
                       
                        placeholder="Enter the commpany name"
                        name="name"  value={companyName} readOnly

                        className={`form-control  ${errors.companyName ? 'is-invalid':''} `}
                        
                        onChange={(e) =>setName(e.target.value)}/>

                        {errors.companyName && <div className='invalid-feedback'> {errors.companyName}</div>}
                </div>

                 <div className="form-group mb-3">
                    <label className="form-label">Role:</label>
                    <input
                        type="text"
                       
                        placeholder="Enter the role"
                        name="role"  value={role} readOnly

                        className={`form-control  ${errors.role ? 'is-invalid':''} `}
                        
                        onChange={(e) =>setName(e.target.value)}/>

                        {errors.role && <div className='invalid-feedback'> {errors.role}</div>}
                </div>

                 <div className="form-group mb-3">
                    <label className="form-label">Experience Level:</label>
                    <input
                        type="text"
                       
                        placeholder="Enter the experience level"
                        name="experienceLevel"  value={experienceLevel} readOnly

                        className={`form-control  ${errors.experienceLevel ? 'is-invalid':''} `}
                        
                        onChange={(e) =>setName(e.target.value)}/>

                        {errors.experienceLevel && <div className='invalid-feedback'> {errors.experienceLevel}</div>}
                </div>

                <button className='btn btn-success' onClick={jobApply}>Submit</button>
               
            </form>
      
  


            </div>
              
          </div>


        </div>

     </div>
    </>
  )
}

export default JobApplicationComponent