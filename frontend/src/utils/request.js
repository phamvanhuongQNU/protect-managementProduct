const API_DOWNMAIN = "http://localhost:5000/admin/";
export const get = async (path) => {
  const respone = await fetch(API_DOWNMAIN + path);
  const result = await respone.json();
  return result;
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
  return result;
};
