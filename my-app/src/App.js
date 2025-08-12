import Header from './components/header/header';
import FirstScreen from './components/first-screen/first-screen';
import CatalogSearch from './components/catalog-search/catalog-search';
import ReviewLine from './components/review-line/review-line';
import AdvantageContainer from './components/advantage-container/advantage';
import CustomerReview from './components/customer-review/customer-review';
import HowToOrder from './components/how-to-order/how-to-order';
import FooterContainer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <FirstScreen />
      <CatalogSearch />
      <ReviewLine />
      <AdvantageContainer />
      <CustomerReview />
      <HowToOrder />
      <FooterContainer />
    </div>
  );
}

export default App;
