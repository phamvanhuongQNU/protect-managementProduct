import {useParams} from "react-router-dom"
import { useEffect,useState } from "react";
import { getData } from "../../../API/getAPI";
import "./style.css"
import UploadImage from "../../../components/admin/UploadImage/UploadImage";
function EditProduct(){
  const [product,setProduct] = useState({});
  const {id} = useParams();

  useEffect(()=>{
    
    
    const fetchApi = async ()=>{
      const data = await getData(`products/${id}`);
      console.log(data)
      setProduct(data);
    }
    fetchApi();

  })

    return (
    <>
    <div className="edit-product">
        <form className="form-edit" action="" method="get">
        <table className="edit-product__table" >
          <tbody>
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Tiêu đề</td>
              <td>
                <input type="text" name="title" id="" value={product.titile} />
              </td>
            </tr>
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Mô tả</td>
              <td>
                <input type="text" name="description" id="" />
              </td>
            </tr>
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Giá</td>
              <td>
                <input type="text" name="price" id="" />
              </td>
            </tr>
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">%Giảm giá</td>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Số lượng</td>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr >
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Ảnh</td>
              <td>
                <UploadImage/>
              </td>
            </tr >
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Danh mục</td>
              <td>
                <select>
                  <option value="">Điện thoại</option>
                  <option value="">Đồ chơi</option>
                </select>
              </td>
            </tr >
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Trạng thái</td>
              <td>
                <span className="edit-product__table__field__radio">
                  <input type="radio" name="status" value={"active"} />
                  <label>Hoạt động</label>
                </span>
                <span className="edit-product__table__field__radio">
                  <input type="radio" name="status" value={"inactive"} />
                  <label>Không hoạt động</label>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <input className="form-edit__submit" type="submit" name="" id="" value={"Sửa"} />
        </form>
      </div>
    </>
    )
}
export default EditProduct;