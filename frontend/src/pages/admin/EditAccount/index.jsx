import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import './style.css'
function EditAccount() {
  return (
    <>
      <div className="edit-container">
        <div className="infoAccount">
          <div className="title">Thông tin tài khoản</div>
          <Form className="form-edit form--margin-bottom">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" className="align-item--right">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" className="align-item--right">
                Mật khẩu
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" className="align-item--right">
                Nhập lại mật khẩu
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" className="align-item--right">
                Nhóm quyền
              </Form.Label>
              <Col sm="10">
                <Form.Select>
                  <option selected value="0">
                    Lựa chọn
                  </option>
                  <option value="1">Quản trị viên</option>
                  <option value="2">Nhân viên</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </div>
        <div className="infoUser">
          <div className="title">Thông tin cá nhân</div>
          <Form className="form-edit">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" className="align-item--right">
                Họ tên
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
              <Form.Label column sm="2" className="align-item--right">
                Số điện thoại
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" className="align-item--right">
                Địa chỉ
              </Form.Label>
              <Col sm="2">
                <Form.Control type="text" placeholder="Tỉnh/Thành phố"/>
              </Col>
              <Col sm="2">
                <Form.Control type="text" placeholder="Huyện/Thị xã" />
              </Col>
              <Col sm="2">
                <Form.Control type="text" placeholder="Xã/Phường"/>
              </Col>
              <Col sm="4">
                <Form.Control type="text" placeholder="Đường"/>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}
export default EditAccount;
