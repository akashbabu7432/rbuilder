import commonapi from "./commonapi"
import serverurl from "./serverurl"

// resume add api
export const addresumeapi=async(resume)=>{
     return await commonapi(`${serverurl}/resume`,"POST",resume)
}
// get resume api
export const getresumeapi=async(id)=>{
     return await commonapi(`${serverurl}/resume/${id}`,"GET",{})
}
// update resume api
export const updateresumeapi=async(id,resume)=>{
     return await commonapi(`${serverurl}/resume/${id}`,"PUT",resume)
}
// add history api
// get history api
// remove hispory api