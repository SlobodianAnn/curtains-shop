import shoppingImg from '../../img/shopping-cart.png';
import './buckte.css';

const BucketStatic = ({ toggleCart, cartItems }) => {
  const itemCount = cartItems.length;

  return (
    <div className="shoppingCart" onClick={toggleCart}>
      <img src={shoppingImg} alt="Корзина" />
      {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
    </div>
  );
};

export default BucketStatic;
