import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShoppingCategory from './Pages/ShoppingCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSign from './Pages/LoginSign';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Componets/Footer/Footer';
import dog from './Assets/pictures/dog.jpg';
import iphone from './Assets/pictures/iphone.jpg';
import jacket4 from './Assets/pictures/jacket4.png';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/pets"
            element={<ShoppingCategory alternative={dog} category="pet" />}
          />
          <Route
            path="/electric"
            element={
              <ShoppingCategory alternative={iphone} category="electric" />
            }
          />
          <Route
            path="/clothes"
            element={
              <ShoppingCategory alternative={jacket4} category="clothes" />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
            
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSign />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
