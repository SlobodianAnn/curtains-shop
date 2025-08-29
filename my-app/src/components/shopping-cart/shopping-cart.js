import './shopping-cart.css';
import FormBasic from '../formik/formik';

const ShoppingCart = ({ cartItems, onClose, onRemoveItem, onClearCart, toggleThankCard }) => {
  const getTotal = () => {
    const total = cartItems.reduce((sum, item) => {
      const price = Number(item.newPrice.toString().replace(/\s|₽/g, ''));
      return sum + (isNaN(price) ? 0 : price);
    }, 0);
    return total.toFixed(2);
  };

  const handleOrderSubmit = (formData) => {
    console.log('🛒 Заказ оформлен:', {
      товары: cartItems,
      данные: formData,
    });

    if (onClearCart) onClearCart();
    if (onClose) onClose();
  };

  return (
    <div className="ShoppingCartBg" onClick={onClose}>
      <div className="shoppingCartWrapper" onClick={(e) => e.stopPropagation()}>
        <button className="cartCloseBtn" onClick={onClose} aria-label="Закрыть корзину">
          &#10005;
        </button>

        <h2 className="h2">Panier</h2>

        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <div className="itemCardWrapper">
            {cartItems.map((item, index) => (
              <div className="itemCard" key={index}>
                <div className="itemImg">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="itemTxt">
                  <div>
                    <div className="itemName h6">{item.name}</div>
                    <div className="itemSelectedSize h6">Dimensions: {item.size || 'Non sélectionné'}</div>
                  </div>
                  <div className="itemPrice">{item.newPrice} €</div>
                </div>
                <button className="removeItemBtn" onClick={() => onRemoveItem(item.id)} aria-label="Удалить товар">
                  ✕
                </button>
              </div>
            ))}

            <div className="totalSum fs-4">Total: {getTotal()} €</div>
            <FormBasic onSubmit={handleOrderSubmit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
