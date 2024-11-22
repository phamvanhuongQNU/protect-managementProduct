import {useParams} from "react-router-dom"
import { useEffect,useState } from "react";
import { getData,updateData } from "../../../API/getAPI";
import "./style.css"
import UploadImage from "../../../components/admin/UploadImage/UploadImage";
import TinyMCE from "../../../components/admin/UploadImage/TinyMCE";

function EditProduct(){
  // data của product
  const [product,setProduct] = useState({});
  // data của danh sách sản phẩm
  const [categories,setCategories] = useState([]);
  // id của sản phẩm
  const {id} = useParams();
  // Khi thay đổi input
  const onchangeData = (e)=>{
    if(e.target){
      const name = e.target.name;
      const value = e.target.value;
      
      setProduct({
        ...product,
        [name] : value
       })
   

       return
    }
    setProduct({
      ...product,
      [e.name] : e.value
     })
 
    
  }

  // sử kiện nhấn nut sửa
  const handlSubmit = (e) =>{
    e.preventDefault();
    const fetchApi = async (url,body)=>{
      const result = await updateData(url,body);
      console.log(result.status);
    }
    fetchApi(`products/edit/${id}`,product)
    
  } 

  // Lấy dự liệu
  useEffect(()=>{
    
    const fetchApi = async (url,setData)=>{
      const data = await getData(url);
      setData(data.result);
    }
    fetchApi(`products/${id}`,setProduct);
    fetchApi(`categories`,setCategories);
  },[id])


    return (
    <>
    <div className="edit-product">
        <form className="form-edit" onSubmit={handlSubmit}>
        <table className="edit-product__table" >
          <tbody>
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Tiêu đề</td>
              <td>
                <input type="text" name="name" id="" value={product.name} onChange={onchangeData}/>
              </td>
            </tr>
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Mô tả</td>
              <td>
                <TinyMCE onchangeData={onchangeData} content={product.description}/>
              </td>
            </tr>
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Giá</td>
              <td>
                <input type="text" name="price" id=""  onChange={onchangeData} value={product.price} />
              </td>
            </tr>
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">%Giảm giá</td>
              <td>
                <input type="text" name="" id="" value={product.discount} onChange={onchangeData}/>
              </td>
            </tr>
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Số lượng</td>
              <td>
                <input type="number" name="" id="" value={parseInt(product.stock_quantity)} />
              </td>
            </tr >
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Ảnh</td>
              <td>
                <UploadImage onchangeData={onchangeData} urlImg={product.thumbnail}/>
              </td>
            </tr >
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Danh mục</td>
              <td>
                <select name="categories_id" onChange={onchangeData}>
                  {[...categories].map((item,_) =><option value={item._id}>{item.title}</option>)}
                </select>
              </td>
            </tr >
            <tr className="edit-product__table__field">
              <td className="edit-product__table__field__label">Trạng thái</td>
              <td>
                <span className="edit-product__table__field__radio">
                  <input type="radio" checked={product.status === "active" ? true : false} name="status" value={"active"} onChange={onchangeData}/>
                  <label>Hoạt động</label>
                </span>
                <span className="edit-product__table__field__radio">
                  <input type="radio" checked={product.status === "inactive" ? true : false} name="status" value={"inactive"} onChange={onchangeData}/>
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