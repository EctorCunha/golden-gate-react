import { DerivAPI } from "@deriv/deriv-api";
import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic';

function App() {


  const api = new DerivAPIBasic({app_id: 35983 });
  console.log(api)

  return (
    <div >
      <h1>Golden Gate</h1>
      <h3>Conectar</h3>
      <h3>Desconectar</h3>
      <table>
        <tr>
          <th>Tipo</th>
          <td>{}</td>
          <th>Entrada</th>
          <td>{}</td>
          <th>Saida</th>
          <td>{}</td>
          <th>Valor de Compra</th>
          <td>{}</td>
          <th>Lucro/Perda</th>
          <td>{}</td>
          <th>Status</th>
          <td>{}</td>
          </tr>
      </table>
    </div>
  )
}

export default App
