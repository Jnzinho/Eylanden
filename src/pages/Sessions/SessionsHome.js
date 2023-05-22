import Card from '../../components/cards/Card';

const cards = [
  {
    label: 'Sessão 1',
    title: 'A emboscada',
    background: 'https://images8.alphacoders.com/550/550174.jpg',
  },
  {
    label: 'Sessão 2',
    title: 'O acampamento',
    background:
      'https://i.pinimg.com/564x/1e/39/5d/1e395d67863843385a7d9633faf3e721.jpg',
  },
];

function SessionsHome() {
  const renderedCards = cards.map((card) => (
    <Card key={Math.random()} config={card}></Card>
  ));

  return <div className="cards-section">{renderedCards}</div>;
}

export default SessionsHome;
