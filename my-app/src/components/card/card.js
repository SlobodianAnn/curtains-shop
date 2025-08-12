import './card.css';

const Card = ({ image, name, count, oldPrice, newPrice, material, size }) => {
  return (
    <div className="card">
      <div className="imgWrapper">
        <img className="cardImg" src={image} alt="" />
      </div>

      <div className="cardName">{name}</div>
      <div className="cardAmount">Осталось в наличии: {count}шт.</div>
      <div className="cardInfo">Материалы: {material}</div>
      <div className="cardInfoSIze">Размер: {size}</div>

      <div></div>
      {/* <div className="cardRating">
        <span className="stars"></span>
      </div> */}
      <div className="cardPriceWrapper">
        <div className="cardOldPrice">{oldPrice} руб.</div>
        <div className="cardNewPrice"> {newPrice} руб.</div>
      </div>
      <div className="cardCircle">-30%</div>
      <a href="" className="cardBtnOrder">
        Выбрать
      </a>
    </div>
  );
};

export default Card;
