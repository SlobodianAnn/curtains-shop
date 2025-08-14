import './thank-component.css';

const ThankComponent = ({ cartItems }) => {
  return (
    <div className="thankContainer">
      <div className="thankWrapper">
        <div>Заказ принят</div>
        <div>{cartItems}</div>
        <div>Благодарим за покупку</div>
      </div>
    </div>
  );
};

export default ThankComponent;
