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
        <div>Très satisfait de mon achat! Les rideaux sont de haute qualité, le tissu est agréable au toucher et la couleur est identique à celle de la photo. La pièce est immédiatement devenue plus confortable. Je recommande!</div>
      </div>
      <div className="sliderImg">
        <img src={client1} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Camille</div>
        <div>Je l'ai commandé pour la deuxième fois, la qualité est excellente. Les couleurs sont profondes, le tissu ne se froisse pas et les coutures sont régulières. Merci à la boutique!</div>
      </div>
      <div className="sliderImg">
        <img src={client2} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Chloé</div>
        <div>De très beaux rideaux! Ils ont l'air chers, le tissu est épais mais doux et tombe joliment. Je les ai accrochés dans le salon et j'ai tout de suite eu une impression chaleureuse et accueillante. C'est incroyable comme ils ont transformé tout l'intérieur. J'en commanderai d'autres pour la cuisine!</div>
      </div>
      <div className="sliderImg">
        <img src={client3} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Amélie</div>
        <div>Les rideaux sont arrivés soigneusement pliés, sans odeur ni plis. Je les ai accrochés immédiatement et la pièce était transformée! Je les recommanderai à mes amis!</div>
      </div>
      <div className="sliderImg">
        <img src={client4} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Juliette</div>
        <div>J'ai commandé des rideaux pour la chambre - excellente qualité, tissu épais et magnifiquement brillant. La couleur est exactement comme sur la photo, tout est soigneusement cousu. Livraison rapide.</div>
      </div>
      <div className="sliderImg">
        <img src={client5} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Clémence</div>
        <div>J'ai acheté des rideaux pour la chambre des enfants: doux et agréables au toucher. L'enfant est ravi! Merci pour la livraison rapide et l'excellent emballage.</div>
      </div>
      <div className="sliderImg">
        <img src={client6} alt="" />
      </div>
    </div>,
    <div className="slide-content">
      <div className="slideTxt">
        <div className="slideHeadline">Manon</div>
        <div>Ces rideaux ont complètement transformé notre salon. La couleur est conforme à la photo, le tissu est épais et tombe magnifiquement. Pour un tel prix, une véritable aubaine. Merci à la boutique!</div>
      </div>
      <div className="sliderImg">
        <img src={client7} alt="" />
      </div>
    </div>,
  ];

  return (
    <div className="customerReview" id="review">
      <div className="container customerReview-wrap ">
        <div className="headline headlineR h2">Avis des clients</div>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default CustomerReview;
