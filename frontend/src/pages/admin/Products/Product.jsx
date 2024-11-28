import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
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
                    <div className="status">{data.status === "active" ? "Hoạt động" : "Không hoạt động"}</div>
                  </td>
                  <td>
                  <div className="icon-wrapper">
                    <Link to={`edit/${data._id}`} className="edit-button"><FaRegEdit /></Link>
                      <div className="delete-button"><FaRegTrashAlt /></div>
                  </div>
                    
                  </td>
                </tr>
        </>
    )
}

export default Product