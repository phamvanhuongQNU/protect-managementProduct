import "./style.css";
import { useEffect, useState } from "react";
import TinyMCE from "../../../components/admin/UploadImage/TinyMCE";
import { getData, createData } from "../../../API/getAPI";
import UploadImage from "../../../components/admin/UploadImage/UploadImage";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { modalSuccess } from "../../../components/admin/Swal";
import { useNavigate } from "react-router";
function CreateProduct() {
  const [data, setData] = useState({});
  const [dataCategories, setdataCategories] = useState([]);
  const navigate = useNavigate()
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
    
    const fetchApi = async () => {
      const result = await createData("products/create", data);
      if (result){
        modalSuccess("Thêm sản phẩm thành công");
        setTimeout(()=>{
            navigate(-1)
        },1000)
      }
    };
    fetchApi();
  };
  console.log(data)
  return (
    <>
      <div className="create-product">
        
        <Form method="post" onSubmit={HandleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-align--right">
              <h5>Tiêu đề</h5>
            </Form.Label>
            <Col sm="10">
              <Form.Control name="name" onChange={onchangeData} type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-align--right">
             <h5> Mô tả</h5>
            </Form.Label>
            <Col sm="10">
              <TinyMCE onchangeData={onchangeData} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-align--right">
              <h5>Giá</h5>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" name="price" onChange={onchangeData}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-align--right">
              <h5>% giảm giá</h5>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" max={100} name="discount" onChange={onchangeData} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-align--right">
              <h5>Số lượng</h5>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" name="stock_quantity" onChange={onchangeData} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-align--right">
              <h5>Ảnh</h5>
            </Form.Label>
            <Col sm="10">
              <UploadImage onchangeData={onchangeData} urlImg="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-align--right">
              <h5>Danh mục</h5>
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
            <Form.Label column sm="2" className="text-align--right">
              <h5>Trạng thái</h5>
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
