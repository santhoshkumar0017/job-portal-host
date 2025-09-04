import axios from 'axios'


const REST_API_URL="http://localhost:8080/api/jobportal";

const REST_API_JOB_APPLY="http://localhost:8080/api/jobApplication"

export const listofJobs=() =>axios.get(REST_API_URL);
export const experienceLevelofJobs=(experienceLevel) =>axios.get(REST_API_URL+'/searchByExperienceLevel?experienceLevel='+experienceLevel);

export const sectorJobs=(sector) =>axios.get(REST_API_URL+'/searchBySector?sector='+sector);


export const fourthcase = (experienceLevel, sector) =>
  axios.get(REST_API_URL + '/search', {
    params: {
      experienceLevel: experienceLevel,
      sector: sector
    }
  });

export const jobId=(id) => axios.get(REST_API_URL+"/"+id)

export const createJob=(job) => axios.post(REST_API_URL,job)

export const applyJob=(jobAppplicationObj)=>axios.post(REST_API_JOB_APPLY,jobAppplicationObj)