import './first-screen.css';

const FirstScreen = () => {
  return (
    <div className="first-screen-container">
      <div className="container">
        <div className="text-wrapper">
          <h1 className="h1">
            SOLEA
            <br /> <span>L’élégance à vos fenêtres</span>
          </h1>
          <div className="box">
            <div className="sale-subtxt display-7">Chez Solea, chaque rideau est une touche de lumière et de raffinement. Des tissus délicats, des couleurs harmonieuses et un style intemporel pour sublimer votre intérieur. Offrez à vos fenêtres l’élégance qu’elles méritent.</div>
          </div>
          <a className="btn btn-catalog" href="#catalog">
            voir le catalogue
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
