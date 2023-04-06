import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products/:catName/:catId" element={ <ProductPage /> } />
        <Route path="/products/detail/:id" element={ <ProductDetailPage /> }  />
      </Routes>
    </Router>
  );
}

export default App;
