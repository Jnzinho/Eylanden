import Card from '../../components/cards/Card';
import './homePage.css';
import { FcNightLandscape } from 'react-icons/fc';

function HomePage() {
  const cardConfig = {
    title: 'Characters',
    background: 'https://i.redd.it/figc76qvn0061.jpg',
  };

  const cardConfig2 = {
    title: 'Locations',
    background:
      'https://img1.goodfon.com/wallpaper/nbig/7/5d/patagonia-landscape-panoramic.jpg',
  };

  const cardConfig3 = {
    title: 'Sessions',
    background:
      'https://i0.wp.com/nerdarchy.com/wp-content/uploads/2018/03/RPG-group-2.jpg?fit=1200%2C720&ssl=1',
  };

  return (
    <>
      <div className="introduction">
        <h1 className="greeting">
          Bem vindo à Eylanden <FcNightLandscape />
        </h1>
        <p className="description">Um mundo de D&D criado com carinho</p>
      </div>
      <section className="cards-section">
        <Card config={cardConfig}></Card>
        <Card config={cardConfig2}></Card>
        <Card config={cardConfig3}></Card>
      </section>
    </>
  );
}

export default HomePage;
