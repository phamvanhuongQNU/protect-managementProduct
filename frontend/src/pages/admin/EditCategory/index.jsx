import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UploadImage from "../../../components/admin/UploadImage/UploadImage";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";


import { useEffect, useState, memo } from "react";
import { getData, updateData } from "../../../API/getAPI.js";
import { getCookie } from "../../../utils/cookie.js";
import { modalSuccess } from "../../../components/admin/Swal/index";
function EditCategory({ handleClose, dataCategory, setDataCategories,id }) {
  const [data, setData] = useState({});
  const [permissions, setPermissions] = useState([]);
  const role = getCookie("role");
  const token = getCookie("token");
  const fetchPermission = async () => {
    const permission = await getData(`roles/role/${token}`);
   
    setPermissions(permission.result.data.permissions);
    
  };
  const onchangeData = (e) => {
    if (e.target) {
      const name = e.target.name;
      const value = e.target.value;
      setData({
        ...data,
        [name]: value,
      });
      return;
    }
    setData({
      ...data,
      [e.name]: e.value,
    });
  };
  // Nhấn nút sửa
  const handleEditCategory = () => {
    const fetchApi = async () => {
      const result = await updateData(`categories/edit/${id}`, data);
      if (result.status === 200) {
        modalSuccess(result.result.message);
        const index = [...dataCategory].findIndex(item => item._id === id);
        dataCategory[index].title = data.title;
        dataCategory[index].thumbnail = data.thumbnail;
        setDataCategories(dataCategory);
      }
    };
    fetchApi();
  };
  console.log(data)
  useEffect(() => {
    const fetchApi = async () => {
       
        const result = await getData(`categories/${id}`);
        setData(result.result);

    };
    fetchPermission()
    fetchApi();
  }, [id]);

  return (
    <>
      {(permissions.includes("update_category") || role === "QTV") && <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa Danh mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Tiêu đề
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={onchangeData}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Ảnh
              </Form.Label>
              <Col sm="10">
                <UploadImage urlImg={data.thumbnail || ""} onchangeData={onchangeData}  />
              </Col>
            </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Thoát
          </Button>
          <Button variant="primary" onClick={handleEditCategory}>
            Sửa
          </Button>
        </Modal.Footer>
      </Modal>}
    </>
  );
}
export default memo(EditCategory);
