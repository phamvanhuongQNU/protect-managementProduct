import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../../../API/getAPI";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import "./Category.css";

const Category = () => {
    const [dataCategories, setDataCategories] = useState([]);
    const navigate = useNavigate();

    // Xem sản phẩm theo danh mục
    const handleCategoryClick = (categoryId) => {
        navigate(`/admin/products/category/${categoryId}`);
    };

    useEffect(() => {
        // Lấy data
        const fechAPI = async () => {
            const data = await getData("categories_products");
            setDataCategories(data.result);
        };

        fechAPI();
    }, []);

    return (
        <>
            <div className="category-list">
                <table className="category-table">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" />
                            </th>
                            <th>Danh Mục</th>
                            <th>Tổng sản phẩm</th>
                            <th>Tổng giá tiền</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...dataCategories].map((data) => (
                            <tr className="data-category">
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td
                                    className="name"
                                    width={"40%"}
                                    onClick={() =>
                                        handleCategoryClick(data._id)
                                    }
                                >
                                    <div>{data.title}</div>
                                </td>
                                <td
                                    className="price"
                                    onClick={() =>
                                        handleCategoryClick(data._id)
                                    }
                                >
                                    {data.totalProducts}
                                </td>
                                <td
                                    className="price"
                                    onClick={() =>
                                        handleCategoryClick(data._id)
                                    }
                                >
                                    {data.totalAmount}đ
                                </td>
                                <td>
                                    <div className="icon-wrapper">
                                        <Link
                                            to={`edit/${data._id}`}
                                            className="edit-button"
                                        >
                                            <FaRegEdit />
                                        </Link>
                                        <div className="delete-button">
                                            <FaRegTrashAlt />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bottom-bar">
                <Link to={"create"} className="add-category">
                    Thêm Danh Mục
                </Link>

                <div className="pagination-buttons">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                </div>
            </div>
        </>
    );
};

export default Category;
