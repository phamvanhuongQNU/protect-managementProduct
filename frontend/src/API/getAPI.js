import { get,post } from "../utils/request";

export const getData = async(path)=>{
    const result = await get(path)
    return result;
}
export const createData =async (path,body) =>{
    const result = await post(path,body);
    return result;
}