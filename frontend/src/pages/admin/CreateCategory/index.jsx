import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UploadImage from "../../../components/admin/UploadImage/UploadImage";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState,memo } from "react";
import {createData} from '../../../API/getAPI.js'
import {modalSuccess} from '../../../components/admin/Swal/index'
function CreateCategory({ handleClose,dataCategory,setDataCategories}) {
  const [data,setData] = useState({});
  const onchangeData = (e)=>{
    if (e.target){
      const name = e.target.name;
      const value = e.target.value;

      setData({
        ...data,
        [name] : value
      })
      return
    }
    setData({
      ...data,
      [e.name] : e.value
    })
  }
  // Nhấn nút thêm
  const handleAddCategory = ()=>{
    const fetchApi =async ()=>{
      const result = await createData("categories/create",data);
      if(result.status === 200) {
        modalSuccess(result.result.message);
        const newCategory = [...dataCategory]
        result.result.data.totalProducts = 0
        result.result.data.totalAmount = 0
        newCategory.push(result.result.data);
        console.log(result.result.data)
        console.log(newCategory)
        setDataCategories(newCategory)
        handleClose();
      }
    }
    fetchApi();
  }
  console.log(data)
  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm Danh mục</Modal.Title>
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
                <Form.Control type="text" name="title" onChange={onchangeData}/>
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
                <UploadImage urlImg="" onchangeData={onchangeData}/>
              </Col>
            </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Thoát
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Thêm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default memo(CreateCategory);
