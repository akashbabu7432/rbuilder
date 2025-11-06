import axios from "axios"

const commonapi=async(url,httpmethod,reqBody)=>{
    const requestConfig={
        url,
        method:httpmethod,
        data:reqBody
        }
     return await axios(requestConfig).then (res=>res).catch(err=>err)

}
export default commonapi;