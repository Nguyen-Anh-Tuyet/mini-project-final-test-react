function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px', marginBottom: '30px' }}>
      {/* Render các nút trang */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            padding: '10px 15px',
            border: '1px solid #ddd',
            borderRadius: '3px',
            cursor: 'pointer',
            backgroundColor: currentPage === page ? '#FFA500' : 'white',
            color: currentPage === page ? 'white' : '#666',
            fontWeight: currentPage === page ? 'bold' : 'normal',
            fontSize: '14px'
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;