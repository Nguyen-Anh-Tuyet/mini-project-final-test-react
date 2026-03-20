function Footer() {
  return (
    <footer style={{ backgroundColor: '#2c2c2c', color: 'white', padding: '40px 20px', marginTop: '40px' }}>
      <div style={{ display: 'flex', maxWidth: '100%', marginLeft: '0', gap: '60px', paddingBottom: '30px', borderBottom: '1px solid #444' }}>
        
        {/* ABOUT US */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', textTransform: 'uppercase', textAlign: 'left' }}>About Us</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc', marginBottom: '10px', textAlign: 'left' }}>Chúng tôi là trang bán tạp chí uy tín</p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc', marginBottom: '10px', textAlign: 'left' }}>Cung cấp các tạp chí chất lượng cao</p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc', textAlign: 'left' }}>Với giá cả hợp lý và dịch vụ tốt</p>
        </div>

        {/* CONTACT INFO */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', textTransform: 'uppercase', textAlign: 'left' }}>Contact Info</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#ccc', marginBottom: '10px', textAlign: 'left' }}>📍 Địa chỉ: 123 Đường ABC, Hà Nội</p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#ccc', marginBottom: '10px', textAlign: 'left' }}>📱 Điện thoại: 0123 456 789</p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#ccc', textAlign: 'left' }}>📧 Email: info@magazines.com</p>
        </div>

        {/* CUSTOMER SERVICE */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', textTransform: 'uppercase', textAlign: 'left' }}>Customer Service</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px', textAlign: 'left' }}>
            <a href="#faq" style={{ color: '#FFA500', textDecoration: 'none' }}>Câu hỏi thường gặp</a>
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px', textAlign: 'left' }}>
            <a href="#shipping" style={{ color: '#FFA500', textDecoration: 'none' }}>Vận chuyển</a>
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', textAlign: 'left' }}>
            <a href="#return" style={{ color: '#FFA500', textDecoration: 'none' }}>Đổi trả</a>
          </p>
        </div>

        {/* POPULAR TAGS */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', textTransform: 'uppercase', textAlign: 'left' }}>Popular Tags</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            <span style={{ backgroundColor: '#FFA500', color: 'white', padding: '8px 12px', borderRadius: '3px', fontSize: '12px', cursor: 'pointer' }}>Tạp chí</span>
            <span style={{ backgroundColor: '#FFA500', color: 'white', padding: '8px 12px', borderRadius: '3px', fontSize: '12px', cursor: 'pointer' }}>Tin tức</span>
            <span style={{ backgroundColor: '#FFA500', color: 'white', padding: '8px 12px', borderRadius: '3px', fontSize: '12px', cursor: 'pointer' }}>Thời trang</span>
            <span style={{ backgroundColor: '#FFA500', color: 'white', padding: '8px 12px', borderRadius: '3px', fontSize: '12px', cursor: 'pointer' }}>Công nghệ</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '20px', fontSize: '14px', color: '#999' }}>
        © 2026 Magazines Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;