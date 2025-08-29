import { useState } from 'react';
import './catalog-search.css';
import CardsPanel from '../cards-panel/cards-panel';
import data from '../../cardData/cardData';
import dataSize from '../../cardData/data2';

const CatalogSearch = ({ onAddToCart, onOpenCart }) => {
  const [type, setType] = useState('1.5'); // активный фильтр

  return (
    <div className="catalog-search-container" id="catalog">
      <div className="container">
        <h2 className="headline h2">catalogue</h2>

        {/* Если нужно — можно добавить фильтры размеров здесь */}

        <CardsPanel type={type} data={data} dataSize={dataSize} onAddToCart={onAddToCart} onOpenCart={onOpenCart} />
      </div>
    </div>
  );
};

export default CatalogSearch;
