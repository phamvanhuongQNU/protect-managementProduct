import { Link } from "react-router-dom";
import "./product.css"
function Product(props){
  const {data} = props;
    return (
        <>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{data.position}</td>
                  <td>
                    <img
                      src={data.thumbnail}
                      alt="Sản phẩm"
                    />
                  </td>
                  <td className="name" width={"40%"} ><div>{data.name}</div></td>
                  <td className="price">{data.price}đ</td>
                  <td>
                    <div className={data.status === "active" ? "status-active" :"status-inactive"}>{data.status === "active" ? "Hoạt động" : "Không hoạt động"}</div>
                  </td>
                  <td>
                  <Link to={`edit/${data._id}`} className="edit-button">Sửa</Link>
                    <button className="delete-button">Xoá</button>
                    
                  </td>
                </tr>
        </>
    )
}

export default Product