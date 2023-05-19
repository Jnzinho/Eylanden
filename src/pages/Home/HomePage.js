import Card from '../../components/cards/Card';
import './homePage.css';
import { FcNightLandscape } from 'react-icons/fc';

function HomePage() {
  const cardConfig = {
    title: 'Characters',
    background:
      'https://img.freepik.com/premium-photo/3d-render-digital-art-fantasy-natural-environment-high-quality-wallpaper_685067-887.jpg?w=2000',
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
        <Card config={cardConfig}></Card>
        <Card config={cardConfig}></Card>
      </section>
    </>
  );
}

export default HomePage;
