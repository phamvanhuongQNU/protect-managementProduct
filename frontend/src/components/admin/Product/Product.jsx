import { useEffect } from "react"
import "./style.css"

function Product(){
    return (
        <>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{1}</td>
                  <td>
                    <img
                      src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27-680x356.jpg"
                      alt="Sản phẩm"
                    />
                  </td>
                  <td>Bàn Phím Cơ</td>
                  <td>1,999,000đ</td>
                  <td>
                    <span className="status active">Hoạt Động</span>
                  </td>
                  <td>
                    <button className="edit-button">Sửa</button>
                    <button className="delete-button">Xóa</button>
                  </td>
                </tr>
        </>
    )
}

export default Product