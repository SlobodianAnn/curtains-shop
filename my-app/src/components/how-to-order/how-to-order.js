import './how-to-order.css';
import phone from '../../img/phone.png';
import order from '../../img/order.png';
import wallet from '../../img/wallet.png';
import deliver from '../../img/deliver.png';

const HowToOrder = () => {
  return (
    <div className="HowToOrder" id="order">
      <div className="container">
        <div className="headline h2">Как заказать?</div>
        <div className="wrapperHowToOrder">
          <div className="iconBox orderIcon">
            <div className="iconImgWrapper">
              <img src={order} alt="" />
            </div>
            <div className="iconTxt">Вы оформляете заказ на нашем сайте</div>
          </div>
          <div className="iconBox orderIcon">
            <div className="iconImgWrapper">
              <img src={phone} alt="" />
            </div>
            <div className="iconTxt">Менеджер перезвонит вам для уточнения деталей заказа</div>
          </div>
          <div className="iconBox orderIcon">
            <div className="iconImgWrapper">
              <img src={deliver} alt="" />
            </div>
            <div className="iconTxt">В ближайшее время отправляем ваш заказ</div>
          </div>
          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={wallet} alt="" />
            </div>
            <div className="iconTxt">Вы оплачиваете заказ на почте во время получения</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;
