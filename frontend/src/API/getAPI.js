import { get, post, put,del,patch } from "../utils/request";

export const getData = async(path,isAdmin)=>{
    const result = await get(path,isAdmin)
    return result;
}
export const createData =async (path,body,isAdmin) =>{
    const result = await post(path,body,isAdmin);
    return result;
}

export const updateData =async (path,body,isAdmin) =>{
    const result = await put(path,body,isAdmin);
    return result;
}
export const deleteData = async (path,isAdmin) =>{
    const result = await del(path,isAdmin)
    return result
}
export const postData =async (path,body,isAdmin) =>{
    const result = await post(path,body,isAdmin);
    return result;
}
export const changeData =async (path,isAdmin) =>{
    const result = await patch(path,isAdmin);
    return result;
}