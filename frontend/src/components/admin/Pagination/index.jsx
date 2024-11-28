import "./style.css";
import React, { useState, useMemo } from "react";
import { getData } from "../../../API/getAPI";

function Pagination(props) {
  const { setDataProducts, totalPage, sortkey, value } = props;
  const [currentPage, setCurrentPage] = useState(0);

  const handleClickPagination = (e) => {
    const page = parseInt(e.target.id);
    setCurrentPage(page);
  };
  useMemo(() => {
    const paginationFetch = async (url) => {
      const data = await getData(url);
      setDataProducts(data.result.products);
    };
    if (sortkey && value)
      paginationFetch(
        `products?limit=${5}&page=${
          currentPage + 1
        }&key=${sortkey}&value=${value}`
      );
    else {
      paginationFetch(`products?limit=${5}&page=${currentPage + 1}`);
    }
  }, [currentPage]);

  return (
    <div className="pagination-buttons">
      <ul>
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
      </ul>
    </div>
  );
}
export default (Pagination);
