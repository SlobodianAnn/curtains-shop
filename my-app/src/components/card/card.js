import { useState } from 'react';
import './card.css';
import { FiveStars, FourHalfStars, FourStars } from '../star-rating/star-rating';

const Card = ({ image, name, count, oldPrice, newPrice, material, id, onAddToCart, onOpenCart, rating }) => {
  // Инициализируем selectedSize: если пришёл пропс size — ставим его, иначе дефолтный вариант
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
    size: selectedSize, // передаём выбранный размер
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
      <div className="cardAmount">Осталось: {count} шт.</div>
      <div className="cardInfo">Материалы: {material}</div>
      <div className="cardInfo">В комплект входит тюль</div>

      <div className="cardInfoSIze">
        Размер:
        <select
          className="form-select"
          name="sizeSaleItem"
          id="sizeSaleItem"
          value={selectedSize} // связали селект с состоянием
          onChange={(e) => setSelectedSize(e.target.value)} // обновляем состояние при выборе
        >
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
          onOpenCart(); // открываем корзину
        }}
      >
        Выбрать
      </button>
    </div>
  );
};

export default Card;
