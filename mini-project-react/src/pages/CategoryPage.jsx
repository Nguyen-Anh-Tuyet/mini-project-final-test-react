import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import SidebarFilter from '../components/SidebarFilter';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const allowedCategories = ['smartphones', 'laptops', 'groceries', 'fragrances', 'furniture', 'kitchen-accessories'];

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
    setCurrentPage(1);
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products/categories');
      const data = await response.json();
      
      const filteredCategories = data.filter(category => 
        allowedCategories.includes(category.slug)
      );
      
      setCategories(filteredCategories);
      setLoading(false);
    } catch (error) {
      console.log('Lỗi gọi API categories:', error);
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let url = '';

      if (!selectedCategory) {
        url = 'https://dummyjson.com/products';
      } else {
        url = `https://dummyjson.com/products/category/${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log('Lỗi gọi API products:', error);
      setProducts([]);
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="page-wrapper">
      <Header />
      <Breadcrumb />

      {/* Content Wrapper */}
      <div className="content-wrapper">
        
        {/* FILTER SECTION - Left */}
        <aside className="sidebar">
          <SidebarFilter 
            categories={categories} 
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </aside>

        {/* PRODUCTS SECTION - Right */}
        <main className="products-section">
          <h3 className="section-title">
            Danh sách sản phẩm {selectedCategory && `- ${selectedCategory}`}
          </h3>

          {/* Hiển thị loading */}
          {loading && <p className="loading-text">⏳ Đang tải dữ liệu...</p>}

          {/* Hiển thị sản phẩm */}
          {!loading && currentProducts.length > 0 && (
            <div className="products-grid">
              {currentProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={{
                    id: product.id,
                    name: product.title,
                    image: product.thumbnail,
                    newPrice: Math.round(product.price * 1000),
                    oldPrice: Math.round(product.price * 1000 * 1.3),
                    discount: Math.round((product.discountPercentage) || 0)
                  }}
                />
              ))}
            </div>
          )}

          {/* Nếu không có sản phẩm */}
          {!loading && products.length === 0 && <p className="no-products">Không tìm thấy sản phẩm</p>}

          {/* Pagination */}
          {!loading && products.length > 0 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default CategoryPage;