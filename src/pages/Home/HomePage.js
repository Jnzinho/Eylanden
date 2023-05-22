import Card from '../../components/cards/Card';
import './homePage.css';
import { FcNightLandscape } from 'react-icons/fc';

const cards = [
  {
    title: 'Personagens',
    background: 'https://i.redd.it/figc76qvn0061.jpg',
    to: 'personagens',
  },
  {
    title: 'Localizações',
    background:
      'https://img1.goodfon.com/wallpaper/nbig/7/5d/patagonia-landscape-panoramic.jpg',
    to: '/locais',
  },
  {
    title: 'Sessões',
    background:
      'https://i0.wp.com/nerdarchy.com/wp-content/uploads/2018/03/RPG-group-2.jpg?fit=1200%2C720&ssl=1',
    to: '/sessoes',
  },
];

function HomePage() {
  const renderedCards = cards.map((card) => {
    return <Card key={Math.random()} config={card}></Card>;
  });

  return (
    <>
      <div className="introduction">
        <h1 className="greeting">
          Bem vindo à Eylanden <FcNightLandscape />
        </h1>
        <p className="description">Um mundo de D&D criado com carinho</p>
      </div>
      <section className="cards-section">{renderedCards}</section>
    </>
  );
}

export default HomePage;
