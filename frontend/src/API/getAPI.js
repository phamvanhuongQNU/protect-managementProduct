import { getData } from "../utils/request";

export const getProducts = async(path)=>{
    const result = await getData(path)
    return result;
}
export const getDetailProduct = async(path)=>{
    const result = await getData(path)
    return result;
}