import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ 
        backgroundColor: 'white', 
        border: '1px solid #ddd', 
        borderRadius: '5px', 
        overflow: 'hidden', 
        textAlign: 'center', 
        position: 'relative', 
        cursor: 'pointer', 
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        
        {/* Image */}
        <div style={{ 
          position: 'relative', 
          overflow: 'hidden',
          width: '100%',
          height: '180px',
          backgroundColor: '#f9f9f9'
        }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain',
              padding: '10px'
            }} 
          />
          
          {/* Discount Badge */}
          {product.discount && (
            <div style={{ 
              position: 'absolute', 
              top: '10px', 
              right: '10px', 
              backgroundColor: '#FFA500', 
              color: 'white', 
              padding: '6px 10px', 
              borderRadius: '3px', 
              fontWeight: 'bold', 
              fontSize: '12px' 
            }}>
              -{product.discount}%
            </div>
          )}
        </div>

        {/* Product Info */}
        <div style={{ padding: '12px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ 
            fontSize: '13px', 
            fontWeight: 'bold', 
            margin: '8px 0', 
            minHeight: '32px',
            lineHeight: '1.4',
            color: '#333',
            flex: 1
          }}>
            {product.name}
          </h4>
          
          {/* Price */}
          <div style={{ marginBottom: '10px' }}>
            <span style={{ 
              fontSize: '14px', 
              fontWeight: 'bold', 
              color: '#d32f2f' 
            }}>
              {product.newPrice.toLocaleString('vi-VN')}₫
            </span>
            {product.oldPrice && (
              <span style={{ 
                fontSize: '11px', 
                color: '#999', 
                marginLeft: '8px', 
                textDecoration: 'line-through' 
              }}>
                {product.oldPrice.toLocaleString('vi-VN')}₫
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              alert('Thêm vào giỏ: ' + product.name);
            }}
            style={{ 
              width: '100%', 
              padding: '10px 8px', 
              backgroundColor: '#FFA500', 
              color: 'white', 
              border: 'none', 
              borderRadius: '3px', 
              cursor: 'pointer', 
              fontWeight: 'bold', 
              fontSize: '13px'
            }}
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;