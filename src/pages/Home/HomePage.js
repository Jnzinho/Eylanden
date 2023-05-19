import Card from '../../components/cards/Card';
import './homePage.css';
import { GiWorld } from 'react-icons/gi';

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
          Welcome to Eylanden <GiWorld />
        </h1>
        <p className="description">
          A world of dungeons and dragons built with love, here you can find
          information about locations, characters and the sessions of my rpg
        </p>
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
