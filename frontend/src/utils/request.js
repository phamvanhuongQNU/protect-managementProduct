const API_DOWNMAIN = "http://localhost:5000/admin/";
const API_DOWNMAIN_CLIENT = "http://localhost:5000";

export const get = async (path, isAdmin = true) => {
  const basePath = isAdmin ? "admin/" : "";
  const respone = await fetch(API_DOWNMAIN_CLIENT + "/" + basePath + path);
  const result = await respone.json();
  return {
    result : result,
    status : respone.status
  }
};

export const post = async (path, body) => {
  const respone = await fetch(API_DOWNMAIN + path, {
    method: "post",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json",
    },
    body : JSON.stringify(body)
  });
  const result = await respone.json();
  return {
    result : result,
    status : respone.status
  }
};

export const put = async (path,body) =>{
  const respone = await fetch(API_DOWNMAIN + path,{
    method : "put",
    headers  :{
       Accept: "application/json",
        "content-Type": "application/json",
    },
    body : JSON.stringify(body)
    
  })  
  const result = await respone.json();

  return {
    result : result,
    status : respone.status
  }
}

export const del = async(path)=>{
  const respone = await fetch(API_DOWNMAIN + path,{
    method : "delete"
  });
  const result = await respone.json();
  return {
    result : result,
    status : respone.status
  }
  
}