const API_DOWNMAIN = "http://localhost:5000/admin/";
const API_DOWNMAIN_CLIENT = "http://localhost:5000";

export const get = async (path, isAdmin = true) => {
  const basePath = isAdmin ? API_DOWNMAIN  : API_DOWNMAIN_CLIENT;
  const respone = await fetch(basePath + path);
  const result = await respone.json();
  return {
    result : result,
    status : respone.status
  }
};

export const post = async (path, body, isAdmin = true) => {
  const basePath = isAdmin ? API_DOWNMAIN  : API_DOWNMAIN_CLIENT;

  const respone = await fetch(basePath + path, {
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

export const put = async (path,body,isAdmin = true) =>{
  const basePath = isAdmin ? API_DOWNMAIN  : API_DOWNMAIN_CLIENT;

  const respone = await fetch(basePath+ path,{
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

export const del = async(path,isAdmin = true)=>{
  const basePath = isAdmin ? API_DOWNMAIN  : API_DOWNMAIN_CLIENT;

  const respone = await fetch(basePath + path,{
    method : "delete"
  });
  const result = await respone.json();
  return {
    result : result,
    status : respone.status
  }
  
}

export const patch = async(path,isAdmin = true)=>{
  const basePath = isAdmin ? API_DOWNMAIN  : API_DOWNMAIN_CLIENT;

  const respone = await fetch(basePath + path,{
    method : "put"
  });
  const result = await respone.json();
  return {
    result : result,
    status : respone.status
  }
  
}