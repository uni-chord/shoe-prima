import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Checkout from '../pages/Checkout';
import Confirmed from '../pages/Confirmed';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Products from '../pages/Products';
import Failed from '../pages/Failed';
import Cart from '../pages/Cart';

const Router: () => JSX.Element = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/confirmed/:orderId" element={<Confirmed />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/failed/:orderId" element={<Failed />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
