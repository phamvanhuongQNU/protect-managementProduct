const API_DOWNMAIN = "http://localhost:5000/admin/"
export const getData =async (path) =>{
    const respone = await fetch(API_DOWNMAIN+path);
    const result = await respone.json();
    return result
}