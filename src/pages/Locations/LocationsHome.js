import Card from '../../components/cards/Card';

const cards = [
  {
    title: 'Krieg',
    background: 'https://i.imgur.com/t1RqZsH.png',
  },
  {
    title: 'Dunkel',
    background:
      'https://i.pinimg.com/originals/58/33/29/583329125e4145109b33087fbee73140.jpg',
  },
];

function LocationsHome() {
  const renderedCards = cards.map((card) => {
    return <Card key={Math.random()} config={card}></Card>;
  });

  return <div className="cards-section">{renderedCards}</div>;
}

export default LocationsHome;
