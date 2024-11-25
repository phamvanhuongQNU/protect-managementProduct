import { useState } from "react";

function TopBar(props) {
    const { titlePage, onSearch } = props;
    const [searchValue, setSearchValue] = useState("");

    // Cap nhat gia tri state ipnut 
    const handleInputChange = (e) => {
      setSearchValue(e.target.value);
    };

    // Them phim Enter
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        onSearch(searchValue);
      }
    }

    const handleSearch = () => {
      if (onSearch) {
        onSearch(searchValue);
      }
    }
    return (
    

        <div className="top-bar">
          <h4>{titlePage}</h4>
          <div className="search-bar">
            <input
              type="text" 
              placeholder="Tìm kiếm..."
              value={searchValue}  
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button className="complete-button" onClick={handleSearch}>Tìm kiếm</button>
          </div>

          <img
            className="user-avatar"
            src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27-680x356.jpg"
            alt="User Avatar"
          />
        </div>
       
        
    
    )
}
export default TopBar