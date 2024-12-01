import "./style.css";
import { useEffect, useState } from "react";
import TinyMCE from "../../../components/admin/UploadImage/TinyMCE";
import { getData, createData } from "../../../API/getAPI";
import UploadImage from "../../../components/admin/UploadImage/UploadImage";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function CreateProduct() {
  const [data, setData] = useState({});
  const [dataCategories, setdataCategories] = useState([]);

  // Lấy data từ các input
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
  // Lấy data categories
  useEffect(() => {
    const fechApi = async () => {
      const data = await getData("categories");
      setdataCategories(data.result);
    };
    fechApi();
  }, []);

  // Tạo sản phẩm khi click và submit
  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    const fetchApi = async () => {
      await createData("products/create", data);
    };
    fetchApi();
  };
  console.log(data)
  return (
    <>
      <div className="create-product">
        
        <Form method="post" onSubmit={HandleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              <h4>Tiêu đề</h4>
            </Form.Label>
            <Col sm="10">
              <Form.Control name="name" onChange={onchangeData} type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
             <h4> Mô tả</h4>
            </Form.Label>
            <Col sm="10">
              <TinyMCE onchangeData={onchangeData} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              <h4>Giá</h4>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" name="price" onChange={onchangeData}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              <h4>% giảm giá</h4>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" max={100} name="discount" onChange={onchangeData} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              <h4>Số lượng</h4>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" name="stock_quantity" onChange={onchangeData} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              <h4>Ảnh</h4>
            </Form.Label>
            <Col sm="10">
              <UploadImage onchangeData={onchangeData} urlImg="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              <h4>Danh mục</h4>
            </Form.Label>
            <Col sm="10">
              <Form.Select name="category_id" onChange={onchangeData}>
              {[...dataCategories].map((item, _) => (
                      <option value={item._id}>{item.title}</option>
                    ))}
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              <h4>Trạng thái</h4>
            </Form.Label>
            <Col sm="10">
            <span className="create-product__table__field__radio">
                    <input
                      type="radio"
                      name="status"
                      
                      value={"active"}
                      onChange={onchangeData}
                    />
                    <label>Hoạt động</label>
                  </span>
                  <span className="create-product__table__field__radio">
                    <input
                      type="radio"
                      name="status"
                      
                      value={"inactive"}
                      onChange={onchangeData}
                    />
                    <label>Không hoạt động</label>
                  </span>
            </Col>
            <Col sm="10"><input
            className="form-create__submit"
            type="submit"
            name=""
            id=""
            value={"Thêm"}
          /></Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
export default CreateProduct;
