import React from "react";
import "./AboutPage.css"; // Import file CSS

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-wrapper">
        <h1 className="about-title">Giới thiệu về chúng tôi</h1>

        <section className="about-description">
          <p>
            Chào mừng bạn đến với <strong>[Tên Công Ty]</strong>, nơi chúng tôi
            mang đến các sản phẩm chất lượng với mức giá hợp lý. Chúng tôi tự
            hào là một trong những đơn vị hàng đầu trong ngành bán lẻ trực
            tuyến, cam kết mang lại sự hài lòng tối đa cho khách hàng. Từ thời
            trang đến đồ gia dụng, mỗi sản phẩm của chúng tôi đều được lựa chọn
            cẩn thận để đáp ứng nhu cầu của bạn.
          </p>
        </section>

        <h2 className="section-title">Sứ mệnh của chúng tôi</h2>
        <p className="about-description">
          Sứ mệnh của chúng tôi là cung cấp những sản phẩm chất lượng, dịch vụ
          khách hàng tận tâm và giúp khách hàng có những trải nghiệm mua sắm
          tuyệt vời nhất.
        </p>

        <h2 className="section-title">Tầm nhìn</h2>
        <p className="about-description">
          Chúng tôi hướng tới trở thành thương hiệu bán lẻ trực tuyến dẫn đầu
          tại Việt Nam, tạo dựng mối quan hệ lâu dài và bền vững với khách hàng.
        </p>

        <h2 className="section-title">Giá trị cốt lõi</h2>
        <ul className="core-values">
          <li>Chất lượng sản phẩm vượt trội</li>
          <li>Hỗ trợ khách hàng chu đáo</li>
          <li>Cam kết giao hàng nhanh chóng và an toàn</li>
          <li>Tiết kiệm chi phí cho khách hàng</li>
        </ul>

        <h2 className="section-title">Đội ngũ của chúng tôi</h2>
        <p className="about-description">
          Đội ngũ nhân viên của chúng tôi bao gồm những người chuyên nghiệp,
          giàu kinh nghiệm và luôn sẵn sàng hỗ trợ bạn 24/7. Mỗi người đều tận
          tâm với công việc và không ngừng học hỏi để mang đến dịch vụ tốt nhất
          cho khách hàng.
        </p>

        <h2 className="section-title">Lý do bạn nên chọn chúng tôi</h2>
        <div className="reasons">
          <div className="reason">
            <h3>Chất lượng sản phẩm</h3>
            <p>
              Chúng tôi cam kết cung cấp sản phẩm chất lượng, được kiểm tra kỹ
              lưỡng trước khi giao đến tay khách hàng.
            </p>
          </div>
          <div className="reason">
            <h3>Giao hàng nhanh chóng</h3>
            <p>
              Chúng tôi cam kết giao hàng nhanh chóng, đảm bảo đúng hẹn và an
              toàn.
            </p>
          </div>
          <div className="reason">
            <h3>Dịch vụ hỗ trợ 24/7</h3>
            <p>
              Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng giải đáp
              mọi thắc mắc của bạn.
            </p>
          </div>
        </div>

        {/* Phần địa chỉ và thông tin liên hệ */}
        <h2 className="section-title">Thông Tin Liên Hệ</h2>
        <div className="contact-info">
          <p>
            <strong>Địa chỉ:</strong> 170 An Dương Vương, Nguyễn Văn Cừ, Thành
            phố Quy Nhơn, Bình Định, Việt Nam
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:lamki538@gmail.com" className="contact-link">
              lamki538@gmail.com
            </a>
          </p>
          <p>
            <strong>Hotline:</strong>{" "}
            <a href="tel:+84343283891" className="contact-link">
              +84 34 328 3891
            </a>
          </p>
          <p>
            <strong>Facebook:</strong>{" "}
            <a
              href="https://facebook.com"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat với chúng tôi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
