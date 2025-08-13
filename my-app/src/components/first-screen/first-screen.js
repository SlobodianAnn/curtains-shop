import './first-screen.css';

const FirstScreen = () => {
  return (
    <div className="first-screen-container">
      <div className="container">
        <div className="text-wrapper">
          <h1 className="h1">
            ШТОРЫ
            <br /> <span>ЕВРОПЕЙСКОГО КАЧЕСТВА</span>
          </h1>
          <div className="attention h2">ВНИМАНИЕ!</div>
          <div className="box">
            <div className="sale-txt h2">ПОЛНАЯ РАСПРОДАЖА</div>
            <div className="sale-subtxt display-7">Последний день ликвидации товара! Скидки до 70%</div>
          </div>
          <a className="btn btn-catalog" href="#catalog">
            Смотреть каталог
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
