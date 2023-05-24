import Table from '../../../components/tabela/Table';

function Kick() {
  const tableInfo = {
    // <td>{personagem.terraNatal}</td>
    //       <td>{personagem.raca}</td>
    //       <td>{personagem.classe}</td>
    //       <td>{personagem.antecedente}</td>
    terraNatal: 'Feenin',
    raca: 'Halfling',
    classe: 'Gunslinger',
    antecedente: 'Mecânico',
    imagem:
      'https://cdn.donmai.us/original/e1/65/e165cc7311d8c63edc96ab17ccb8989a.jpg',
  };

  return (
    <div>
      <h1>Kick Lalafell</h1>
      <Table personagem={tableInfo}></Table>
    </div>
  );
}

export default Kick;
