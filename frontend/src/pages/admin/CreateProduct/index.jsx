import "./style.css";
import { useEffect, useState } from "react";
import TinyMCE from "../../../components/admin/UploadImage/TinyMCE";
import { getData, createData } from "../../../API/getAPI";
import UploadImage from "../../../components/admin/UploadImage/UploadImage";
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
  const HandleonSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    const fetchApi = async () => {
      await createData("products/create", data);

    };
    fetchApi();
  };
  return (
    <>
      <div className="create-product">
        <form
          className="form-create"
          action=""
          method="get"
          onSubmit={HandleonSubmit}
        >
          <table className="create-product__table">
            <tbody>
              <tr className="create-product__table__field">
                <td className="create-product__table__field__label">Tiêu đề</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    id=""
                    onChange={onchangeData}
                  />
                </td>
              </tr>
              <tr className="create-product__table__field">
                <td className="create-product__table__field__label">Mô tả</td>
                <td>
                  <TinyMCE onchangeData={onchangeData} />
                </td>
              </tr>
              <tr className="create-product__table__field">
                <td className="create-product__table__field__label">Giá</td>
                <td>
                  <input
                    type="number"
                    name="price"
                    id=""
                    min={0}
                    onChange={onchangeData}
                  />
                </td>
              </tr>
              <tr className="create-product__table__field">
                <td className="create-product__table__field__label">
                  %Giảm giá
                </td>
                <td>
                  <input
                    type="number"
                    min={0}
                    name="discount"
                    id=""
                    onChange={onchangeData}
                  />
                </td>
              </tr>
              <tr className="create-product__table__field">
                <td className="create-product__table__field__label">
                  Số lượng
                </td>
                <td>
                  <input
                    type="text"
                    name="stock_quantity"
                    id=""
                    onChange={onchangeData}
                  />
                </td>
              </tr>
              <tr className="create-product__table__field">
                <td className="create-product__table__field__label">Ảnh</td>
                <td>
                  <UploadImage onchangeData={onchangeData} urlImg="" />
                </td>
              </tr>
              <tr className="create-product__table__field">
                <td className="create-product__table__field__label">
                  Danh mục
                </td>
                <td>
                  <select name="categories_id" onChange={onchangeData}>
                    {[...dataCategories].map((item, _) => (
                      <option value={item._id}>{item.title}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr className="create-product__table__field">
                <td className="create-product__table__field__label">
                  Trạng thái
                </td>
                <td>
                  <span className="create-product__table__field__radio">
                    <input
                      type="radio"
                      name="status"
                      checked={true}
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
                </td>
              </tr>
            </tbody>
          </table>
          <input
            className="form-create__submit"
            type="submit"
            name=""
            id=""
            value={"Thêm"}
          />
        </form>
      </div>
    </>
  );
}
export default CreateProduct;
