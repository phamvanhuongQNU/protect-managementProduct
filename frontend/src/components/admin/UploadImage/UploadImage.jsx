import "./style.css";
import { useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { GrUpload } from "react-icons/gr";
function UploadImage(props) {
  const inputImgRef = useRef();


  const [urlImage, setUrlImage] = useState("");
  const handleFileUpload = async (even) => {
    const file = even.target.files[0];
    if (file) {
      console.log(file);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "management-product");
      formData.append("cloud_name", "dop07bzjs");
      formData.append("api_key", "853112843439446");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dop07bzjs/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const uploadImg = await res.json();
      inputImgRef.current.value = uploadImg.url;
      props.onchangeData(inputImgRef.current)
      setUrlImage(uploadImg.url);
    }
  };


  // Xử lí sự kiện xoá ảnh
  const handleCloseImg = (even)=>{
    console.log(even.target);
    const inputFile = document.querySelector(".input-file");
    inputFile.value = ""
    setUrlImage("")
  }

  // console.log(urlImage);
  return (
    <>
      <div className="image-upload">
        <input
        
          type="file"
          accept="image/*"
          name="thumbnail"
          
          id="input-image"
          className="input-file"
          onChange={(e)=>{
            handleFileUpload(e);
            
          }}
        />
        {urlImage === "" ? (
          <div className="upload-block">
          <GrUpload className="upload-icon"/>
          <label className="image-label" htmlFor="input-image">Upload File</label>
          </div>
        ) : (
          <><div className="image-block"><img className="preview-image" src={urlImage} alt="" /><IoIosCloseCircle className="icon-close" onClick={handleCloseImg}/></div></>
        )}
           <input type="hidden" name="thumbnail" ref={inputImgRef} />
      </div>
    </>
  );
}
export default UploadImage;
