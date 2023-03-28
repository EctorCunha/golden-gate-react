// import { google } from "googleapis";
// import credentials from "../../credentials.json";
// import token from "../../token.json";

// const auth = new google.auth.OAuth2(
//   credentials.client_id,
//   credentials.client_secret,
//   credentials.redirect_uris[0]
// );

// auth.setCredentials(token);

// const drive = google.drive({
//   version: "v3",
//   auth: auth,
// });

// const folderId = "your-folder-id";
// const mimeType = "application/xml";

// drive.files.list(
//   {
//     q: `parents in '${folderId}' and mimeType='${mimeType}' and trashed=false`,
//     fields: "files(id, name)",
//   },
//   (err, res) => {
//     if (err) {
//       console.log(`Erro ao listar arquivos: ${err}`);
//     } else {
//       const files = res.data.files;
//       console.log(`Arquivos XML na pasta (${folderId}):`);
//       files.forEach((file) => {
//         console.log(`- ${file.name} (${file.id})`);
//       });
//     }
//   }
// );

// import { useState, useEffect } from "react";

// function BotDropdown() {
//   const [botList, setBotList] = useState([]);

//   useEffect(() => {
//     const folderId = "your-folder-id";
//     const mimeType = "application/xml";

//     drive.files.list(
//       {
//         q: `parents in '${folderId}' and mimeType='${mimeType}' and trashed=false`,
//         fields: "files(id, name)",
//       },
//       (err, res) => {
//         if (err) {
//           console.log(`Erro ao listar arquivos: ${err}`);
//         } else {
//           const files = res.data.files;
//           const botNames = files.map((file) => file.name);
//           setBotList(botNames);
//         }
//       }
//     );
//   }, []);

//   return (
//     <div>
//       <label htmlFor="bot-select">Selecionar bot:</label>
//       <select id="bot-select">
//         {botList.map((bot) => (
//           <option key={bot} value={bot}>
//             {bot}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// function handleBotSelect(e) {
//   const botName = e.target.value;

//   const folderId = "your-folder-id";
//   const mimeType = "application/xml";

//   drive.files.list(
//     {
//       q: `parents in '${folderId}' and mimeType='${mimeType}' and name='${botName}' and trashed=false`,
//       fields: "files(id, name, webContentLink)",
//     },
//     (err, res) => {
//       if (err) {
//         console.log(`Erro ao buscar arquivo XML: ${err}`);
//       } else {
//         const file = res.data.files[0];
//         const url = file.webContentLink;

//         fetch(url)
//           .then((response) => response.text())
//           .then((data) => {
//             // Carregue o bot XML selecionado
//           })
//           .catch((err) => {
//             console.log(`Erro ao carregar bot XML: ${err}`);
//           });
//       }
//     }
//   );
// }

// export default { BotDropdown, handleBotSelect };
