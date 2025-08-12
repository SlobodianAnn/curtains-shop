import { useState } from 'react';
import './catalog-search.css';
import CardsPanel from '../cards-panel/cards-panel';
import data from '../../cardData/cardData';
import dataSize from '../../cardData/data2';

const CatalogSearch = () => {
  const [type, setType] = useState('1.5'); // активный фильтр

  const filterOptions = [
    { txt: '1.5сп', value: '1.5' },
    { txt: '2сп', value: '2.5' },
    { txt: 'Евро', value: 'evro' },
    { txt: 'Семейные', value: 'family' },
  ];

  const changeFilter = (filterValue) => {
    setType(filterValue);
  };

  return (
    <div className="catalog-search-container">
      <div className="container">
        <h2 className="headline">КАТАЛОГ</h2>
        {/* <div className="size-txt">Выберите необходимый размер:</div>
        <div className="btn-group">
          {filterOptions.map(({ txt, value }) => (
            <BtnFilter key={value} txt={txt} filter={value} isActive={type.toLowerCase() === value.toLowerCase()} onClick={changeFilter} />
          ))}
        </div> */}
        <CardsPanel type={type} data={data} dataSize={dataSize} />
      </div>
    </div>
  );
};

const BtnFilter = ({ txt, filter, isActive, onClick }) => {
  const className = `btn btn-filter${isActive ? ' btn-filter-active' : ''}`;

  return (
    <button className={className} onClick={() => onClick(filter)}>
      {txt}
    </button>
  );
};

export default CatalogSearch;
