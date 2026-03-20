import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProductDetailPage() {
  // Lấy id từ URL parameter
  const { id } = useParams();
  const navigate = useNavigate();

  // useState để lưu dữ liệu sản phẩm
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect gọi API lấy chi tiết sản phẩm
  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  // Hàm gọi API lấy chi tiết sản phẩm từ dummyjson
  const fetchProductDetail = async () => {
    try {
      setLoading(true);
      // Gọi API dummyjson lấy chi tiết sản phẩm theo id
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log('Lỗi gọi API product detail:', error);
      setProduct(null);
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {/* Nút quay lại */}
        <button 
          onClick={() => navigate('/')}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#FFA500', 
            color: 'white', 
            border: 'none', 
            borderRadius: '3px', 
            cursor: 'pointer', 
            marginBottom: '20px',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          ← Quay lại
        </button>

        {/* Hiển thị loading */}
        {loading && <p style={{ fontSize: '16px', color: '#666' }}>⏳ Đang tải dữ liệu...</p>}

        {/* Hiển thị chi tiết sản phẩm */}
        {!loading && product && (
          <div style={{ display: 'flex', gap: '30px', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            
            {/* Hình ảnh */}
            <div style={{ width: '40%' }}>
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                style={{ width: '100%', borderRadius: '5px', objectFit: 'cover' }}
              />
            </div>

            {/* Thông tin sản phẩm */}
            <div style={{ width: '60%' }}>
              <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px' }}>
                {product.title}
              </h1>

              {/* Giá */}
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#d32f2f', marginBottom: '15px' }}>
                {Math.round(product.price * 1000).toLocaleString('vi-VN')}₫
              </p>

              {/* Discount */}
              {product.discountPercentage && (
                <p style={{ fontSize: '16px', color: '#FFA500', marginBottom: '15px' }}>
                  🏷️ Giảm {Math.round(product.discountPercentage)}%
                </p>
              )}

              {/* Rating */}
              {product.rating && (
                <p style={{ fontSize: '16px', color: '#ffab00', marginBottom: '15px' }}>
                  ⭐ {product.rating} / 5 ({product.reviews?.length || 0} đánh giá)
                </p>
              )}

              {/* Mô tả */}
              <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                {product.description}
              </p>

              {/* Hàng tồn kho */}
              {product.stock !== undefined && (
                <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
                  📦 Kho: <strong>{product.stock > 0 ? `${product.stock} sản phẩm` : 'Hết hàng'}</strong>
                </p>
              )}

              {/* Nút thêm vào giỏ */}
              <button 
                style={{ 
                  padding: '12px 30px', 
                  backgroundColor: product.stock > 0 ? '#FFA500' : '#ccc',
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '3px', 
                  cursor: product.stock > 0 ? 'pointer' : 'not-allowed',
                  fontWeight: 'bold',
                  fontSize: '16px'
                }}
                disabled={product.stock <= 0}
              >
                {product.stock > 0 ? '🛒 Thêm vào giỏ' : 'Hết hàng'}
              </button>
            </div>
          </div>
        )}

        {/* Nếu không có sản phẩm */}
        {!loading && !product && (
          <p style={{ fontSize: '16px', color: '#666', textAlign: 'center' }}>
            ❌ Không tìm thấy sản phẩm
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetailPage;