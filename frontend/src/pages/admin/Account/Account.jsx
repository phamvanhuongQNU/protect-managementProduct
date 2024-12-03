import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
function Account({data}){
    return(
        <>
         {[...data].map((item, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                  <Link to={`edit/${item._id}`} className="edit">
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