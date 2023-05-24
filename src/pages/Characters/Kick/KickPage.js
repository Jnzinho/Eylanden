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
  };

  return (
    <div>
      <h1>Kick Lalafell</h1>
      <Table personagem={tableInfo}></Table>
    </div>
  );
}

export default Kick;
