import './cards-panel.css';
import Card from '../card/card';

const CardsPanel = ({ data, type, dataSize, onAddToCart, onOpenCart }) => {
  const elements = data.filter((item) => item.type.toLowerCase() === type.toLowerCase()).map((item) => <Card key={item.id} {...item} onAddToCart={onAddToCart} onOpenCart={onOpenCart} />);

  return (
    <div className="container">
      <div className="wrapperCards">{elements.length > 0 ? elements : <p>Нет подходящих карточек</p>}</div>
    </div>
  );
};

export default CardsPanel;
