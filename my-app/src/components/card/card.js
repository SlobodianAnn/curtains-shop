import { useState } from 'react';
import './card.css';
import { FiveStars, FourHalfStars, FourStars } from '../star-rating/star-rating';

const Card = ({ image, name, count, oldPrice, newPrice, material, id, onAddToCart, onOpenCart, rating }) => {
  const [selectedSize, setSelectedSize] = useState('220x300');
  const discountPercent = '50';
  const calculatedOldPrice = (newPrice * 2).toFixed(2);

  const itemData = {
    image,
    name,
    count,
    oldPrice,
    newPrice,
    material,
    size: selectedSize,
    id,
    rating,
  };

  const selectRating = (rating) => {
    switch (rating) {
      case '5':
        return <FiveStars />;
      case '4.5':
        return <FourHalfStars />;
      case '4':
        return <FourStars />;
      default:
        return <FiveStars />;
    }
  };

  return (
    <div className="card">
      <div className="imgWrapper">
        <img className="cardImg" src={image} alt={name} />
      </div>

      <div className="cardName">{name}</div>
      {selectRating(rating)}
      <div className="cardAmount">Restant: {count} pièces.</div>
      <div className="cardInfo">Type de tissu: {material}</div>
      <div className="cardInfo">L'ensemble comprend du tulle</div>

      <div className="cardInfoSIze">
        Dimensions:
        <select className="form-select" name="sizeSaleItem" id="sizeSaleItem" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
          <option value="220x300">220x300</option>
          <option value="240x300">240x300</option>
          <option value="260x300">260x300</option>
          <option value="280x300">280x300</option>
        </select>
      </div>

      <div className="cardPriceWrapper">
        <div className="cardOldPrice"> {calculatedOldPrice} €</div>
        <div className="cardNewPrice">{newPrice} €</div>
      </div>

      <div className="cardCircle">{discountPercent}%</div>

      <button
        className="cardBtnOrder"
        onClick={() => {
          onAddToCart(itemData);
          onOpenCart(); // открыть корзину
        }}
      >
        Ajouter au panier
      </button>
    </div>
  );
};

export default Card;
