import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {createData} from "../../../API/getAPI.js"
import {modalSuccess,modalFailed} from "../../../components/admin/Swal/index.jsx"
import "./style.css";
function CreateAccount() {
  const [data, setData] = useState({});
  const [address, setAddress] = useState({});
  const navigate = useNavigate();
  const onchangeData = (e) => {
    console.log(e.target.name);
    const name = e.target.name;
    console.log(e.target.value);
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const onchangeAddress = (e) => {
    const name = e.target.name;

    const value = e.target.value;
    setAddress({
      ...address,
      [name]: value,
    });
    setData({
      ...data,
      address,
    });
  };
  
  // nút thêm sản phẩm
  const handleClick = (e)=>{
    const createFetch =async ()=>{
        const result = await createData("users/create",data);
        if(result.status === 200){
          
         
        }
       
        switch (result.status) {
          case 200:{
            modalSuccess(result.result.message);
            setTimeout(()=>{
                navigate(-1)
            },1000)
            break;
          }
          case 500 : {
            modalFailed(result.result.message)
            break;
          }
          default:
            break;
        }   
    }
    createFetch();
   
  }
  return (
    <>
      <div className="create-container">
        <div className="infoAccount">
        <div className="add-user"> <button className="btn-add-user" onClick={handleClick}> + Thêm </button></div>
          <div className="title">Thông tin tài khoản</div>
          
          <Form className="form-create form--margin-bottom">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" className="align-item--right">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="email"
                  onChange={onchangeData}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" className="align-item--right">
                Mật khẩu
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="password"
                  onChange={onchangeData}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" className="align-item--right">
                Nhập lại mật khẩu
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  name="repeatPassword"
                  onChange={onchangeData}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" className="align-item--right">
                Nhóm quyền
              </Form.Label>
              <Col sm="10">
                <Form.Select name="role" onChange={onchangeData}>
                  <option selected value="0">
                    Lựa chọn
                  </option>
                  <option value="Quản trị viên">Quản trị viên</option>
                  <option value="Nhân viên">Nhân viên</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </div>
        <div className="infoUser">
          <div className="title">Thông tin cá nhân</div>
          <Form className="form-create">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" className="align-item--right">
                Họ tên
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" name="phone" onChange={onchangeData} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" className="align-item--right">
                Số điện thoại
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" onChange={onchangeData} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" className="align-item--right">
                Địa chỉ
              </Form.Label>
              <Col sm="2">
                <Form.Control
                  type="text"
                  name="province"
                  placeholder="Tỉnh/Thành phố"
                  onChange={onchangeAddress}
                />
              </Col>
              <Col sm="2">
                <Form.Control
                  type="text"
                  name="district"
                  placeholder="Huyện/Thị xã"
                  onChange={onchangeAddress}
                />
              </Col>
              <Col sm="2">
                <Form.Control
                  type="text"
                  name="ward"
                  placeholder="Xã/Phường"
                  onChange={onchangeAddress}
                />
              </Col>
              <Col sm="4">
                <Form.Control
                  type="text"
                  name="street"
                  placeholder="Đường"
                  onChange={onchangeAddress}
                />
              </Col>
            </Form.Group>
          </Form>
          
        </div>
      </div>
    </>
  );
}
export default CreateAccount;
