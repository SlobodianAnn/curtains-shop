import { useState } from 'react';
import Header from './components/header/header';
import FirstScreen from './components/first-screen/first-screen';
import CatalogSearch from './components/catalog-search/catalog-search';
import ReviewLine from './components/review-line/review-line';
import AdvantageContainer from './components/advantage-container/advantage';
import CustomerReview from './components/customer-review/customer-review';
import HowToOrder from './components/how-to-order/how-to-order';
import FooterContainer from './components/footer/footer';
import ShoppingCart from './components/shopping-cart/shopping-cart';
import BucketStatic from './components/bucket/bucket';
import './App.css';

function App() {
  const [isCartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartVisible((prev) => !prev);
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <FirstScreen />
      <CatalogSearch onAddToCart={handleAddToCart} onOpenCart={toggleCart} /> <ReviewLine />
      <AdvantageContainer />
      <CustomerReview />
      <HowToOrder />
      <FooterContainer />
      <BucketStatic toggleCart={toggleCart} cartItems={cartItems} />
      {isCartVisible && <ShoppingCart cartItems={cartItems} onClose={toggleCart} onRemoveItem={handleRemoveItem} onClearCart={handleClearCart} />}{' '}
    </div>
  );
}

export default App;
