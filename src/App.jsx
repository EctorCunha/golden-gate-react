import { DerivAPI } from "@deriv/deriv-api";
import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic';

function App({args}) {


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
          <th>Entrada</th>
          <th>Saida</th>
          <th>Valor de Compra</th>
          <th>Lucro/Perda</th>
          <th>Status</th>
          </tr>
      </table>
    </div>
  )
}

export default App
