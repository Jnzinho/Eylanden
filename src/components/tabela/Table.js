import './table.css';

function Table({ personagem }) {
  return (
    <div className="container">
      <div className="table-container">
        <img className="char-pic" alt="char-pic" src={personagem.imagem}></img>
        <table>
          <tbody>
            <tr>
              <th>Terra Natal:</th>
              <td align="right">{personagem.terraNatal}</td>
            </tr>
            <tr>
              <th>Raça:</th>
              <td align="right">{personagem.raca}</td>
            </tr>
            <tr>
              <th>Classe:</th>
              <td align="right">{personagem.classe}</td>
            </tr>
            <tr>
              <th>Antecedente:</th>
              <td align="right">{personagem.antecedente}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
