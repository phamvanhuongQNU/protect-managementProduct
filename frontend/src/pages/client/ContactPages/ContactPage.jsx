import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa"; // Import icons từ react-icons
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contactPage-container">
      {/* Intro Section */}
      <div className="contactPage-image-introduct">
        <h1>Đội Ngũ Hỗ Trợ sẽ hỗ trợ bạn dù ở bất kì đâu</h1>
        <div className="contactPage-layout"></div>
      </div>

      {/* Map and Information */}
      <div className="contactPage-container-content">
        {/* Google Map */}
        <div className="contactPage-inner-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.330043007123!2d109.2152823741129!3d13.75895968663364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6cebf252c49f%3A0xa83caa291737172f!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBRdXkgTmjGoW4!5e0!3m2!1svi!2s!4v1716262948672!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="google-map"
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="contactPage-inner-right">
          <h3 className="contactPage-title">THÔNG TIN LIÊN HỆ [Tên Website]</h3>
          <p>
            <strong>Địa chỉ: </strong> 170 An Dương Vương, Nguyễn Văn Cừ, Thành
            phố Quy Nhơn, Bình Định, Việt Nam
          </p>
          <p>
            <strong>Giờ mở cửa:</strong>
          </p>
          <ul>
            <li>Thứ Hai - Thứ Sáu: 7:00 - 17:00</li>
            <li>Thứ Bảy: Đóng cửa</li>
            <li>Chủ Nhật: Đóng cửa</li>
          </ul>
          <p>
            <strong>Điện thoại: 0343283891</strong>
          </p>
          <p>
            <strong>Website: </strong>
            <a href="https://www.qnu.edu.vn/">click here</a>
          </p>

          <p>
            <strong>Email: </strong>
          </p>
          <ul>
            <li>Nhân viên hỗ trợ: luongbaophuc@gmail.com</li>
            <li>Nhân viên hỗ trợ: phamvanhuong@gmail.com</li>
            <li>Nhân viên hỗ trợ: dangnhocviet@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Support Section */}
      <div className="contactPage-title-tuvan">
        <h1>TƯ VẤN VÀ HỖ TRỢ</h1>
      </div>

      {/* Support Icons */}
      <div className="contactPage-support">
        <div className="contactPage-email icon">
          <a href="mailto:lamki538@gmail.com">
            <FaEnvelope size={32} color="#6200ea" />
          </a>
          <p>
            <strong>lamki538@gmail.com</strong>
          </p>
          <p>Email</p>
        </div>
        <div className="contactPage-tongdai icon">
          <a href="tel:+0703197015">
            <FaPhoneAlt size={32} color="#6200ea" />
          </a>
          <p>
            <strong>0343283891</strong>
          </p>
          <p>Phone</p>
        </div>
        <div className="contactPage-website icon">
          <a href="https://www.qnu.edu.vn">
            <FaGlobe size={32} color="#6200ea" />
          </a>
          <p>
            <strong>www.daihocquynhon</strong>
          </p>
          <p>Website</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
