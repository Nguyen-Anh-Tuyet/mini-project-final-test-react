function SidebarFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', textAlign: 'left' }}>Bộ lọc</h3>
      
      <div>
        <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', color: '#666', textAlign: 'left' }}>Danh mục</h4>
        {categories.map((category, index) => (
          <div key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <input 
              type="checkbox" 
              id={category.slug}
              checked={selectedCategory === category.slug}
              onChange={() => onCategoryChange(category.slug)}
              style={{ margin: '0', cursor: 'pointer' }}
            />
            <label htmlFor={category.slug} style={{ marginLeft: '8px', cursor: 'pointer', fontSize: '14px', color: '#666', textAlign: 'left' }}>
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarFilter;