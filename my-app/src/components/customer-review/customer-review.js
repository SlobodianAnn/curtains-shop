import Slider from '../slider/slider';
import './customer-review.css';
import client1 from '../../img/client1.jpg';
import client2 from '../../img/client2.jpg';
import client3 from '../../img/client3.jpg';
import client4 from '../../img/client4.jpg';
import client5 from '../../img/client5.jpg';
import client6 from '../../img/client6.jpg';
import client7 from '../../img/client7.jpg';

const CustomerReview = () => {
  const slides = [
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Élise</div>
        <div>Очень довольна покупкой! Шторы качественные, ткань приятная на ощупь, цвет точь-в-точь как на фото. Комната сразу стала уютнее. Рекомендую!</div>
      </div>
      <div className="sliderImg">
        <img src={client1} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Camille</div>
        <div>Заказывала уже второй раз - качество на высоте. Цвета глубокие, ткань не мнется, швы ровные. Спасибо магазину!</div>
      </div>
      <div className="sliderImg">
        <img src={client2} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Chloé</div>
        <div>Очень красивые шторы! Выглядят дорого, ткань плотная, но мягкая, приятно драпируется. Повесила в гостиной и сразу стало по-домашнему тепло. Удивительно, как они преобразили весь интерьер. Буду заказывать ещё на кухню!</div>
      </div>
      <div className="sliderImg">
        <img src={client3} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Amélie</div>
        <div>Шторы пришли аккуратно сложенные, без запаха и заломов. Повесила сразу и комната преобразилась! Буду советовать друзьям!</div>
      </div>
      <div className="sliderImg">
        <img src={client4} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Juliette</div>
        <div>Заказала шторы для спальни - качество отличное, ткань плотная, с красивым блеском. Цвет точно как на фото, всё аккуратно пошито. Доставили быстро.</div>
      </div>
      <div className="sliderImg">
        <img src={client5} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Clémence</div>
        <div>Купила шторы для детской - мягкие, приятные на ощупь. Ребёнок в восторге! Спасибо за быструю доставку и отличную упаковку.</div>
      </div>
      <div className="sliderImg">
        <img src={client6} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Manon</div>
        <div>Эти шторы полностью преобразили нашу гостиную. Цвет - как на фото, ткань плотная, красиво драпируется. За такую цену - просто находка. Спасибо магазину!</div>
      </div>
      <div className="sliderImg">
        <img src={client7} alt="" />
      </div>
    </div>,
  ];

  return (
    <div className="customerReview" id="review">
      <div className="container customerReview-wrap ">
        <div className="headline headlineR h2">Отзывы клиентов</div>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default CustomerReview;
