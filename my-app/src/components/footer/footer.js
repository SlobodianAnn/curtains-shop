import './footer.css';
import oferta from '../../img/oferta.docx';

const FooterContainer = () => {
  return (
    <div className="footerContainer">
      <div className="container footerWrap">
        <div className="footerHeadline">
          SOLEA <br />
          L’élégance à vos fenêtres
        </div>
        <a className="btn btn-catalog" href="#catalog">
          voir le catalogue
        </a>
        <div>
          <a className="oferta-link" href={oferta} target="_blank" rel="noopener noreferrer">
            Offre
          </a>
          <div>Pour toute demande de retour, veuillez nous contacter par e-mail: farvest23@gmail.com </div>
          <div className="oferta-info">
            Nom complet : Boris Alexandrovitch Afanasyev <br />
            NIF : 575109662909
            <br />
            OGRN/OGRNIP : 324570000023805
            <br />
            Numéro de téléphone : +7 915 129-42-72
            <br />
            E-mail de contact : farvest23@gmail.com
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
