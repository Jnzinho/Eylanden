import Card from '../../components/cards/Card';

const cards = [
  {
    title: 'Kick',
    to: 'kick',
    background:
      'https://cdn.donmai.us/original/e1/65/e165cc7311d8c63edc96ab17ccb8989a.jpg',
  },
  {
    title: 'Yggdrasil',
    to: 'yggdrasil',
    background:
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/02/Critical-Role-Mighty-Nein-Origins-Tealeaf-Art.jpg',
  },
  {
    title: 'Quarion',
    to: 'quarrion',
    background:
      'https://arcaneeye.com/wp-content/uploads/2020/03/whisper_agent_by_deruchenko_alexander.0-769x481.jpg',
  },
  {
    title: 'Seraphine',
    to: 'seraphine',
    background:
      'https://i.pinimg.com/474x/4b/f9/8e/4bf98e2a5c81e4dc21ab3e13d79b6dc6.jpg',
  },
];

function CharactersHome() {
  const renderedCards = cards.map((card, index) => {
    return <Card key={Math.random()} config={card}></Card>;
  });

  return (
    <div>
      <div className="cards-section">{renderedCards}</div>
    </div>
  );
}

export default CharactersHome;
