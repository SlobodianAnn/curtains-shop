import { useState } from 'react';
import './card.css';

const Card = ({ image, name, count, oldPrice, newPrice, material, id, onAddToCart, onOpenCart }) => {
  // Инициализируем selectedSize: если пришёл пропс size — ставим его, иначе дефолтный вариант
  const [selectedSize, setSelectedSize] = useState('220x300');

  const itemData = {
    image,
    name,
    count,
    oldPrice,
    newPrice,
    material,
    size: selectedSize, // передаём выбранный размер
    id,
  };

  return (
    <div className="card">
      <div className="imgWrapper">
        <img className="cardImg" src={image} alt={name} />
      </div>

      <div className="cardName">{name}</div>
      <div className="cardAmount">Осталось: {count} шт.</div>
      <div className="cardInfo">Материалы: {material}</div>

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
        <div className="cardOldPrice">{oldPrice} руб.</div>
        <div className="cardNewPrice">{newPrice} руб.</div>
      </div>

      <div className="cardCircle">-30%</div>

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
