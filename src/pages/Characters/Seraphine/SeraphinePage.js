import Table from '../../../components/tabela/Table';

function Seraphine() {
  const tableInfo = {
    // <td>{personagem.terraNatal}</td>
    //       <td>{personagem.raca}</td>
    //       <td>{personagem.classe}</td>
    //       <td>{personagem.antecedente}</td>
    terraNatal: 'Licht',
    raca: 'Eladrin',
    classe: 'Paladina',
    antecedente: 'Nobre',
    imagem:
      'https://i.pinimg.com/474x/4b/f9/8e/4bf98e2a5c81e4dc21ab3e13d79b6dc6.jpg',
  };

  return (
    <div>
      <h1>Seraphine</h1>
      <Table personagem={tableInfo}></Table>
    </div>
  );
}

export default Seraphine;
