import './cards-panel.css';
import Card from '../card/card';

const CardsPanel = ({ data, type, dataSize }) => {
  //const [filter, setFilter] = useState(type);

  const elements = data
    .filter((item) => item.type === type)
    .map((item) => {
      const { id, ...itemProps } = item;
      return <Card key={id} {...itemProps} />;
    });

  const description = dataSize
    .filter((item) => item.type === type)
    .map((item) => {
      const { id, ...itemProps } = item;
      return <DescriptionWrap key={id} {...itemProps} />;
    });

  return (
    <div className="container">
      {/* {description} */}
      <div className="wrapperCards">{elements.length > 0 ? elements : <p>Нет подходящих карточек</p>}</div>
    </div>
  );
};

const DescriptionWrap = ({ material, sheet, duvet, pillow }) => {
  return (
    <div className="description">
      <div className="colD">
        <div>Материал:</div>
        <div>{material}</div>
      </div>
      <div className="colD">
        <div>В комплекте:</div>
        <div>
          простыня: {sheet}- 1 шт. <br />
          пододеяльник: {duvet} - 2 шт. наволочка: {pillow} - 2 шт.
        </div>
      </div>
      <div className="colD">
        <div>Производитель:</div>
        <div>Россия</div>
      </div>
    </div>
  );
};

export default CardsPanel;
