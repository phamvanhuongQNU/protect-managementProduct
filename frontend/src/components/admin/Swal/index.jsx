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
export const modalDelete = (title)=>{
  return (
    Swal.fire({
      title:  title,
      text : "Bạn muốn xoá sản phẩm này?",
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
