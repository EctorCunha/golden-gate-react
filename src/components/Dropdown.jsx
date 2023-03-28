// // components/Dropdown.js

// import { useState } from 'react';
// import { robots } from '../robots.js';

// const Dropdown = () => {
//   const [selectedRobot, setSelectedRobot] = useState(null);

//   const handleRobotChange = (event) => {
//     const selectedRobotId = event.target.value;
//     const selectedRobot = robots.find((robot) => robot.id === selectedRobotId);
//     setSelectedRobot(selectedRobot);
//   };
  
//   return (
//     <div className="dropdown">
//       <select className="dropdown-select" onChange={handleRobotChange}>
//         <option value="">Selecione um robô</option>
//         {robots.map((robot) => (
//           <option key={robot.id} value={robot.id}>
//             {robot.name}
//           </option>
//         ))}
//       </select>

//       {selectedRobot && (
//         <div className="robot-info">
//           <h2>{selectedRobot.name}</h2>
//           <p>{selectedRobot.description}</p>
//           <p>
//             Arquivo: <a href={selectedRobot.filePath}>{selectedRobot.fileName}</a>
//           </p>
//         </div>
//       )}

//       <style jsx>{`
//         .dropdown {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           margin-top: 50px;
//         }

//         .dropdown-select {
//           padding: 10px;
//           border-radius: 5px;
//           border: none;
//           font-size: 16px;
//           margin-bottom: 20px;
//         }

//         .robot-info {
//           margin-top: 20px;
//           text-align: center;
//         }

//         .robot-info h2 {
//           margin-bottom: 10px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Dropdown;
