import trust from '../../img/trust.png';
import best from '../../img/best.png';
import money from '../../img/money.png';
import delivery from '../../img/delivery.png';
import person from '../../img/person.png';
import reward from '../../img/reward.png';
import './advantage.css';

const AdvantageContainer = () => {
  return (
    <div>
      <div className="container">
        <div className="headline">Наши преимущества</div>
        <div className="iconBoxWrapper">
          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={best} alt="" />
            </div>
            <div className="iconTitle">ЛЮКС КАЧЕСТВО</div>
            <div className="iconTxt">Шторы выполнены из качественного материала: не рвутся, не теряют цвет.</div>
          </div>

          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={money} alt="" />
            </div>
            <div className="iconTitle">ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ</div>
            <div className="iconTxt">Если вам не подойдет комплект или вы захотите обменять его на другой</div>
          </div>

          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={delivery} alt="" />
            </div>
            <div className="iconTitle">Быстрая доставка</div>
            <div className="iconTxt">Доставим быстро в любую точку за 1-10 дней, с оплатой при получении</div>
          </div>

          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={person} alt="" />
            </div>
            <div className="iconTitle">ЛУЧШЕЕ ОБСЛУЖИВАНИЕ</div>
            <div className="iconTxt">За 4 года работы - более 50 000 удовлетворенных клиентов</div>
          </div>

          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={reward} alt="" />
            </div>

            <div className="iconTitle">НАГРАДЫ ЗА РАБОТУ</div>
            <div className="iconTxt">Лучший интернет-магазин штор 2020 года</div>
          </div>

          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={trust} alt="" />
            </div>

            <div className="iconTitle">НАМ ДОВЕРЯЮТ</div>
            <div className="iconTxt">Только положительные отзывы покупателей</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageContainer;
