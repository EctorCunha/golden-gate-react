// import  DerivAPI  from "@deriv/deriv-api";
// import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic';
// import WebSocket from "ws";
// import useWebSocket from "react-use-websocket"
import io from 'socket.io-client';

// import BotDropdown from "./components/BotDropdown"

// import Dropdown from "./components/Dropdown"

function App() {

// const socket = io('wss://ws.binaryws.com/websockets/v3?app_id=35983');
// const deriv = new DerivAPIBasic({ websocket: socket });
const socket = io('wss://ws.binaryws.com/websockets/v3?app_id=35983');

socket.onopen = function () {
  socket.send(JSON.stringify({
    "ticks": "SYMBOL_NAME"
  }));
};

socket.onmessage = function (event) {
  const data = JSON.parse(event.data);
  if (data.tick) {
    const price = data.tick.quote;
    console.log(`Preço atual: ${price}`);
  }
};


  return (
    <div >
      <h1>Golden Gate</h1>
      <button href='https://oauth.binary.com/oauth2/authorize?app_id=35983'>Conectar</button>
      <button>Desconectar</button>
      {/* <Dropdown/> */}
      {/* <BotDropdown/> */}
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
