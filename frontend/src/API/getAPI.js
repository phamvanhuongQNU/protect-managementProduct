import { get, post, put,del } from "../utils/request";

export const getData = async(path)=>{
    const result = await get(path)
    return result;
}
export const createData =async (path,body) =>{
    const result = await post(path,body);
    return result;
}

export const updateData =async (path,body) =>{
    const result = await put(path,body);
    return result;
}
export const deleteData = async (path) =>{
    const result = await del(path)
    return result
}