import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route trang danh sách sản phẩm */}
        <Route path="/" element={<CategoryPage />} />
        
        {/* Route trang chi tiết sản phẩm */}
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;