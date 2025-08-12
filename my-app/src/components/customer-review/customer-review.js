import Slider from '../slider/slider';
import './customer-review.css';
import client1 from '../../img/client1.jpg';
import client2 from '../../img/client2.jpg';
import client3 from '../../img/client3.jpg';

const CustomerReview = () => {
  const slides = [
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Екатерина</div>
        <div>Очень довольна покупкой! Шторы качественные, ткань приятная на ощупь, цвет точь-в-точь как на фото. После стирки не сели и не выцвели. Комната сразу стала уютнее. Рекомендую!</div>
      </div>
      <div className="sliderImg">
        <img src={client1} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Марина</div>
        <div>Заказывала уже второй раз — качество на высоте. Цвета глубокие, ткань не мнется, швы ровные. Особенно нравится, что материал не линяет и не притягивает пыль. Спасибо магазину!</div>
      </div>
      <div className="sliderImg">
        <img src={client2} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Александра</div>
        <div>Очень красивые шторы! Выглядят дорого, ткань плотная, но мягкая, приятно драпируется. Повесила в гостиной — и сразу стало по-домашнему тепло. Удивительно, как они преобразили весь интерьер. Буду заказывать ещё на кухню!</div>
      </div>
      <div className="sliderImg">
        <img src={client3} alt="" />
      </div>
    </div>,
  ];

  return (
    <div className="customerReview">
      <div className="container customerReview-wrap ">
        <div className="headline headlineR">Отзывы клиентов</div>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default CustomerReview;
