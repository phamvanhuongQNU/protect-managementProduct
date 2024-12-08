import Swal from "sweetalert2";
export const  modalSuccess = (title) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
};
export const  modalFailed = (title) => {
  Swal.fire({
    position: "center",
    icon: "error",
    title: title, 
  });
};
export const modalDelete = (title,text)=>{
  return (
    Swal.fire({
      title:  title,
      text : text,
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      cancelButtonText : "Thoát",
      confirmButtonText: "Xoá",
      reverseButtons : true
    })
  )
  
}
