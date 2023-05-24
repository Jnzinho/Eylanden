import './table.css';

function Table({ personagem }) {
  return (
    <div className="container">
      <div className="table-container">
        <img
          className="char-pic"
          alt="kick"
          src="https://cdn.donmai.us/original/e1/65/e165cc7311d8c63edc96ab17ccb8989a.jpg"
        ></img>
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
