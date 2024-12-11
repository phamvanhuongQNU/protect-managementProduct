import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { eraseCookie } from "../../../utils/cookie";
function TopBar(props) {
    const navigate = useNavigate();
    const { titlePage, onSearch,check } = props;
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
    // Đăng xuất
    const signOutHandle = ()=>{
      eraseCookie("token");
      eraseCookie("role");
      navigate("/login")
    }
  
    return (
    

        <div className="top-bar">
          <h4>{titlePage}</h4>
          {check !== titlePage && <div className="search-bar">
            <input
              type="text" 
              placeholder="Tìm kiếm..."
              value={searchValue}  
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button className="complete-button" onClick={handleSearch}>Tìm kiếm</button>
          </div>}   

          <div onClick={signOutHandle} className="btn-sign-out">Đăng xuất</div>
        </div>
       
        
    
    )
}
export default TopBar