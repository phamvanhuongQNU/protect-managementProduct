import "./style.css"
import { useEffect } from "react"
function UploadImage() {

    useEffect(()=>{


        const fileInput = document.querySelector("input[name=image]")
        console.log(fileInput)
    
            if (fileInput){
                console.log(fileInput)
                const previewFile = document.querySelector(".preview-image")
                fileInput.addEventListener("change",(e)=>{
                    previewFile.setAttribute("display", "none")
                   
                    console.log(e.target.files[0])
                    const urlImage = URL.createObjectURL(e.target.files[0]);
                    console.log(urlImage)
                    previewFile.src = urlImage
                })
            }
    })
    
            
        
  return (
    <>
      <div className="image">
        <input
          type="file"
          accept="image/*"
          name="image"
          id=""
          className="input-image"
        />
        <img className="preview-image" src="" alt="" display="none" />
      </div>
    </>
  );
}
export default UploadImage;
