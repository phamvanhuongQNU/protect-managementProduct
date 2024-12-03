import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { updateData,getData } from "../../../API/getAPI.js";
import { modalSuccess } from "../../../components/admin/Swal/index.jsx";
import "./style.css";
function EditAccount() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [address, setAddress] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      const account = await getData(`users/${id}`);

      setData(account.result.data);
      setAddress(account.result.data.address)
    };
    fetchApi();
  }, []);
  // Thay đổi dữ liệu
  const onchangData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  }
  // Thay đổi địa chỉ
    const onchangAddress = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setData({
        ...data,
        address : {
          ...address,
          [name] : value
        }
      });
      setAddress({
        ...address,
        [name] : value
      })
    };

    // nhấn nút sửa
    const handleClick = ()=>{
      const fetchApi = async (url, body) => {
        const result = await updateData(url, body);
        console.log(result.status);
        if (result.status === 200){
            modalSuccess("Cật nhập người dùng thành công");
        }
      };
      fetchApi(`users/edit/${id}`, data);
    }
    console.log(data)
    return (
      <>
        <div className="edit-container">
          <div className="infoAccount">
            <div className="edit-user"><button className="btn-edit-user" onClick={handleClick}>Cật nhật</button></div>
            <div className="title">Thông tin tài khoản</div>
            <Form className="form-edit form--margin-bottom">
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" className="align-item--right">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={data.email} name="email" onChange={onchangData} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" className="align-item--right">
                  Nhóm quyền
                </Form.Label>
                <Col sm="10">
                  <Form.Select  name="role" onChange={onchangData}>
                    <option selected value="0" disabled>
                      Lựa chọn
                    </option>
                    <option
                      selected={data.role === "Quản trị viên"}
                      value= {"Quản trị viên"}
                    >
                      Quản trị viên
                    </option>
                    <option
                      selected={data.role === "Nhân viên"}
                      value="Nhân viên"
                    >
                      Nhân viên
                    </option>
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
                  <Form.Control type="text" value={data.fullName} name="fullName" onChange={onchangData} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" className="align-item--right">
                  Số điện thoại
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={data.phone} name="phone" onChange={onchangData} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" className="align-item--right">
                  Địa chỉ
                </Form.Label>
                <Col sm="2">
                  <Form.Control
                    type="text"
                    placeholder="Tỉnh/Thành phố"
                    name="province"
                    value={data.address && data.address.province}
                    onChange={onchangAddress}
                  />
                </Col>
                <Col sm="2">
                  <Form.Control
                    type="text"
                    placeholder="Huyện/Thị xã"
                    name="district"
                    value={data.address && data.address.district}
                    onChange={onchangAddress}
                  />
                </Col>
                <Col sm="2">
                  <Form.Control
                    type="text"
                    placeholder="Xã/Phường"
                    name="ward"
                    value={data.address && data.address.ward}
                    onChange={onchangAddress}
                  />
                </Col>
                <Col sm="4">
                  <Form.Control
                    type="text"
                    placeholder="Đường"
                    name="street"
                    value={data.address && data.address.street}
                    onChange={onchangAddress}
                  />
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
      </>
    );
  };

export default EditAccount;
