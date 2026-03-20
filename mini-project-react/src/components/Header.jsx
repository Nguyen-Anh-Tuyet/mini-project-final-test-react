function Header() {
  return (
    <header style={{ backgroundColor: '#FFA500', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
        Magazines
      </div>

      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="#blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</a>
        <a href="#category" style={{ color: 'white', textDecoration: 'none' }}>Category</a>
        <a href="#product" style={{ color: 'white', textDecoration: 'none' }}>Product</a>
        <a href="#login" style={{ color: 'white', textDecoration: 'none' }}>Login</a>
        <a href="#customer" style={{ color: 'white', textDecoration: 'none' }}>Customer</a>

        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <span style={{ fontSize: '24px' }}>🛒</span>
          <span style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: 'red', color: 'white', borderRadius: '50%', width: '25px', height: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px', fontWeight: 'bold' }}>
            0
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;