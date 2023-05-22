import Card from '../../components/cards/Card';

const cards = [
  {
    title: 'Kick',
    background:
      'https://cdn.donmai.us/original/e1/65/e165cc7311d8c63edc96ab17ccb8989a.jpg',
  },
  {
    title: 'Yggdrasil',
    background:
      'https://i.pinimg.com/736x/39/98/aa/3998aa52d8f022ea79cb676ef42bd43e.jpg',
  },
  {
    title: 'Quarrion',
    background:
      'https://arcaneeye.com/wp-content/uploads/2020/03/whisper_agent_by_deruchenko_alexander.0-769x481.jpg',
  },
  {
    title: 'Seraphine',
    background:
      'https://i.pinimg.com/474x/4b/f9/8e/4bf98e2a5c81e4dc21ab3e13d79b6dc6.jpg',
  },
];

function CharactersHome() {
  const renderedLine1 = cards.map((card, index) => {
    if (index <= 2) {
      return <Card key={Math.random()} config={card}></Card>;
    } else {
      return undefined;
    }
  });

  const renderedLine2 = cards.map((card, index) => {
    if (index > 2 && index <= 5) {
      return <Card key={Math.random()} config={card}></Card>;
    } else {
      return undefined;
    }
  });

  return (
    <div>
      <div className="cards-section">{renderedLine1}</div>
      <div className="cards-section">{renderedLine2}</div>
    </div>
  );
}

export default CharactersHome;
