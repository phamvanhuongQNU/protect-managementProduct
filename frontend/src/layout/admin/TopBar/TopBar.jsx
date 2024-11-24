function TopBar(props) {
    const {titlePage} = props
    return (
    

        <div className="top-bar">
          <h4>{titlePage}</h4>
          <div className="search-bar">
            <input type="text" placeholder="Tìm kiếm..." />
            <button className="complete-button">Tìm Kiếm</button>
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