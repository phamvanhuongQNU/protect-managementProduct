import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
function Account(){
    return(
        <>
         {[...Array(4)].map((_, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>Phạm Văn Hương</td>
                <td>huongtk@gmail.com</td>
                <td>Admin</td>
                <td>
                  <Link href="#" className="edit">
                    <FaRegEdit />
                  </Link>

                  <button  className="delete-btn">
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
            </>
    )
}
export default Account