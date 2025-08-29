import './how-to-order.css';
import phone from '../../img/phone.png';
import order from '../../img/order.png';
import wallet from '../../img/wallet.png';
import deliver from '../../img/deliver.png';

const HowToOrder = () => {
  return (
    <div className="HowToOrder" id="order">
      <div className="container">
        <div className="headline h2">Comment commander?</div>
        <div className="wrapperHowToOrder">
          <div className="iconBox orderIcon">
            <div className="iconImgWrapper">
              <img src={order} alt="" />
            </div>
            <div className="iconTxt">Passez une commande sur notre site Web</div>
          </div>

          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={wallet} alt="" />
            </div>
            <div className="iconTxt">Payer la commande</div>
          </div>

          <div className="iconBox orderIcon">
            <div className="iconImgWrapper">
              <img src={deliver} alt="" />
            </div>
            <div className="iconTxt">Nous vous enverrons votre commande sous peu.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;
