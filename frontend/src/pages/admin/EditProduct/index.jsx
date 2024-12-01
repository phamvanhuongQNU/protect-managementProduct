import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData, updateData } from "../../../API/getAPI";
import "./style.css";
import UploadImage from "../../../components/admin/UploadImage/UploadImage";
import TinyMCE from "../../../components/admin/UploadImage/TinyMCE";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function EditProduct() {
  // data của product
  const [product, setProduct] = useState({});
  // data của danh sách sản phẩm
  const [categories, setCategories] = useState([]);
  // id của sản phẩm
  const { id } = useParams();
  // Khi thay đổi input
  const onchangeData = (e) => {
    if (e.target) {
      const name = e.target.name;
      const value = e.target.value;

      setProduct({
        ...product,
        [name]: value,
      });

      return;
    }
    setProduct({
      ...product,
      [e.name]: e.value,
    });
  };

  // sử kiện nhấn nut sửa
  const handlSubmit = (e) => {
    e.preventDefault();
    const fetchApi = async (url, body) => {
      const result = await updateData(url, body);
      console.log(result.status);
    };
    fetchApi(`products/edit/${id}`, product);
  };

  // Lấy dự liệu
  useEffect(() => {
    const fetchApi = async (url, setData) => {
      const data = await getData(url);
      setData(data.result);
    };
    fetchApi(`products/${id}`, setProduct);
    fetchApi(`categories`, setCategories);
  }, [id]);

  return (
    <>
      <div className="edit-product">
        
        <Form method="post" onSubmit={handlSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              <h4>Tiêu đề</h4>
            </Form.Label>
            <Col sm="10">
              <Form.Control name="name" value={product.name} onChange={onchangeData} type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
             <h4> Mô tả</h4>
            </Form.Label>
            <Col sm="10">
              <TinyMCE content={product.description} onchangeData={onchangeData} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              <h4>Giá</h4>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" name="price" value={product.price} onChange={onchangeData}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              <h4>% giảm giá</h4>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" max={100} name="discount" value={product.discount} onChange={onchangeData} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              <h4>Số lượng</h4>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" name="stock_quantity" value={product.stock_quantity} onChange={onchangeData} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              <h4>Ảnh</h4>
            </Form.Label>
            <Col sm="10">
              <UploadImage onchangeData={onchangeData} urlImg={product.thumbnail} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              <h4>Danh mục</h4>
            </Form.Label>
            <Col sm="10">
              <Form.Select name="category_id" onChange={onchangeData}>
              {[...categories].map((item, _) => (
                      <option selected={product.category_id === item._id ?true : false} value={item._id}>{item.title}</option>
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
                      checked={product.status === "active" ? true : false}
                      value={"active"}
                      onChange={onchangeData}
                    />
                    <label>Hoạt động</label>
                  </span>
                  <span className="create-product__table__field__radio">
                    <input
                      type="radio"
                      name="status"
                      checked={product.status === "active" ? false : true}
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
            value={"Sửa"}
          /></Col>
          </Form.Group>
        </Form>



      </div>
    </>
  );
}
export default EditProduct;
