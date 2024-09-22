import NavBar from '../src/components/nav-bar/nav-bar';
import HomePage from './home-page/home-page' 
import Bakery from './components/bakery-menu/bakery'; 
import About from './components/about-page/about';
import Footer from './components/footer/footer';
import CustomCakePage from './components/custom-cake-page/custom-cake-page';
import Contact from './components/contact-page/contact';
import Checkout from './components/checkout/checkout'
import { Route, Routes } from 'react-router-dom';
import { BakeryCategoryProvider } from './contexts/bakery-context/bakery-context';
import { CloseProductProvider } from './contexts/close-product-context/close-product-context';
import { CartItemsProvider } from './contexts/cart-context/cart-context';

function App() {
  return (
    <div>
      <CartItemsProvider>
      <CloseProductProvider>
      <BakeryCategoryProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='products' element={<Bakery />} />
        <Route path='about' element={<About />} />
        <Route path='custom-cakes' element={<CustomCakePage />} />
        <Route path='contact' element={<Contact />} />
        <Route path='checkout' element={<Checkout />} />
      </Routes>
      <Footer />
      </BakeryCategoryProvider>
      </CloseProductProvider>
      </CartItemsProvider>
    </div>
  );
}

export default App;
