import Table from '../../../components/tabela/Table';

function Ygg() {
  const tableInfo = {
    terraNatal: 'Licht',
    raca: 'Tiefling',
    classe: 'Bardo',
    antecedente: 'Charlatão',
    imagem:
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/02/Critical-Role-Mighty-Nein-Origins-Tealeaf-Art.jpg',
  };

  return (
    <div>
      <h1>Yggdrasil</h1>
      <Table personagem={tableInfo}></Table>
    </div>
  );
}

export default Ygg;
