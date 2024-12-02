import "./style.css";
import { useParams } from "react-router-dom";
import React, { useState,memo ,useMemo } from "react";
import { getData } from "../../../API/getAPI";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
function Pagination(props) {
  const { setDataProducts, totalPage, sortkey, value } = props;
  const [currentPage, setCurrentPage] = useState(0);
  const { categoryId } = useParams();

  const handleClickPagination = (e) => {
    const page = parseInt(e.target.id);
    setCurrentPage(page);
  };
  useMemo(() => {
    const paginationFetch = async (url) => {
      const data = await getData(url);
      setDataProducts(data.result.products);
    };
    const endpoint = categoryId ? `products/category/${categoryId}?limit=${5}&page=${currentPage + 1}`
    : `products?limit=${5}&page=${currentPage + 1}`;
    if (sortkey && value)
      paginationFetch(
        `${endpoint}&key=${sortkey}&value=${value}`
      );
    else {
      paginationFetch(endpoint);
    }
  }, [currentPage, categoryId, setDataProducts, sortkey, value]);
  return (
    <div className="pagination-buttons">
      <ul>
        {currentPage > 0 && <li className="list-pagination" onClick={()=>{setCurrentPage(currentPage-1)}}> <FaArrowLeft/> </li>}
        {[...Array(totalPage)].map((_, index) => (
          <li
            id={index}
            onClick={handleClickPagination}
            className={
              currentPage === index
                ? "list-pagination active-pagination"
                : "list-pagination"
            }
          >
            {index + 1}
          </li>
        ))}
         {currentPage < (totalPage-1) && <li className="list-pagination" onClick={()=>{setCurrentPage(currentPage+1)}}> <FaArrowRight/> </li>}
      </ul>
    </div>
  );
}
export default memo(Pagination);
