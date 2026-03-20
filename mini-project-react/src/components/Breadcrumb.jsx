function Breadcrumb() {
  return (
    <div style={{ padding: '15px 20px', backgroundColor: '#f5f5f5' }}>
      <p style={{ fontSize: '14px', color: '#666', margin: '0', marginLeft: '0', textAlign: 'left' }}>
        <a href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</a>
        {' > '}
        <a href="/category" style={{ color: '#666', textDecoration: 'none' }}>Category</a>
      </p>
    </div>
  );
}

export default Breadcrumb;