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
      <div className="container" id="advantage">
        <div className="headline h2">Nos avantages</div>
        <div className="iconBoxWrapper">
          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={best} alt="" />
            </div>
            <div className="iconTitle">QUALITÉ DE LUXE</div>
            <div className="iconTxt">Les rideaux sont fabriqués dans un matériau de haute qualité : ils ne se déchirent pas et ne perdent pas de couleur.</div>
          </div>

          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={money} alt="" />
            </div>
            <div className="iconTitle">GARANTIE DE REMBOURSEMENT</div>
            <div className="iconTxt">Si l'ensemble ne vous convient pas ou que vous souhaitez l'échanger contre un autre.</div>
          </div>

          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={delivery} alt="" />
            </div>
            <div className="iconTitle">Livraison rapide</div>
            <div className="iconTxt">Nous livrons rapidement à n'importe quel point dans un délai de 9 à 18 jours.</div>
          </div>

          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={person} alt="" />
            </div>
            <div className="iconTitle">MEILLEUR SERVICE</div>
            <div className="iconTxt">Plus de 4 ans de travail - plus de 50 000 clients satisfaits.</div>
          </div>

          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={reward} alt="" />
            </div>

            <div className="iconTitle">PRIX POUR LE TRAVAIL</div>
            <div className="iconTxt">Meilleure boutique de rideaux en ligne 2024</div>
          </div>

          <div className="iconBox">
            <div className="iconImgWrapper">
              <img src={trust} alt="" />
            </div>

            <div className="iconTitle">NOUS SOMMES DE CONFIANCE</div>
            <div className="iconTxt">Seuls les avis clients positifs.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageContainer;
