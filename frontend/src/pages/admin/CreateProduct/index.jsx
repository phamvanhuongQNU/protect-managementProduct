import "./style.css"
import { useEffect } from "react";
import UploadImage from "../../../components/admin/UploadImage/UploadImage";
function CreateProduct() {
    useEffect(()=>{
        const form = document.querySelector(".form__create");
        if (form){
            form.addEventListener("submit",(e)=>{
                e.preventDefault();
                console.log(e)
            })
        }
        
    })
  return (
    <>
      <div className="create-product">
        <form className="form__create" action="" method="get">
        <table className="create-product__table" >
          <tbody>
            <tr className="create-product__table__field">
              <td className="create-product__table__field__label">Tiêu đề</td>
              <td>
                <input type="text" name="title" id="" />
              </td>
            </tr>
            <tr className="create-product__table__field">
              <td className="create-product__table__field__label">Mô tả</td>
              <td>
                <input type="text" name="description" id="" />
              </td>
            </tr>
            <tr className="create-product__table__field">
              <td className="create-product__table__field__label">Giá</td>
              <td>
                <input type="text" name="price" id="" />
              </td>
            </tr>
            <tr className="create-product__table__field">
              <td className="create-product__table__field__label">%Giảm giá</td>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
            <tr className="create-product__table__field">
              <td className="create-product__table__field__label">Số lượng</td>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr >
            <tr className="create-product__table__field">
              <td className="create-product__table__field__label">Ảnh</td>
              <td>
                <UploadImage/>
              </td>
            </tr >
            <tr className="create-product__table__field">
              <td className="create-product__table__field__label">Danh mục</td>
              <td>
                <select>
                  <option value="">Điện thoại</option>
                  <option value="">Đồ chơi</option>
                </select>
              </td>
            </tr >
            <tr className="create-product__table__field">
              <td className="create-product__table__field__label">Trạng thái</td>
              <td>
                <span className="create-product__table__field__radio">
                  <input type="radio" name="status" value={"active"} />
                  <label>Hoạt động</label>
                </span>
                <span className="create-product__table__field__radio">
                  <input type="radio" name="status" value={"inactive"} />
                  <label>Không hoạt động</label>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" name="" id="" value={"submit"} />
        </form>
      </div>
    </>
  );
}
export default CreateProduct;
