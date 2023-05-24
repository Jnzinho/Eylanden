import Table from '../../../components/tabela/Table';

function Quarion() {
  const tableInfo = {
    // <td>{personagem.terraNatal}</td>
    //       <td>{personagem.raca}</td>
    //       <td>{personagem.classe}</td>
    //       <td>{personagem.antecedente}</td>
    terraNatal: 'Umbreterna',
    raca: 'Elfo Negro',
    classe: 'Ladino',
    antecedente: 'Criminoso',
    imagem:
      'https://arcaneeye.com/wp-content/uploads/2020/03/whisper_agent_by_deruchenko_alexander.0-769x481.jpg',
  };

  return (
    <div>
      <h1>Quarion</h1>
      <Table personagem={tableInfo}></Table>
    </div>
  );
}

export default Quarion;
