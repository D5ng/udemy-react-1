import React, { useState } from 'react'
import Expense from './components/Expense';


// function App() {
//   const expenses = [
//     {
//       id: "e1",
//       title: "Toilet Paper",
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     { 
//       id: "e2", 
//       title: "New TV", 
//       amount: 799.49, 
//       date: new Date(2021, 2, 12) },
//     {
//       id: "e3",
//       title: "Car Insurance",
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: "e4",
//       title: "New Desk (Wooden)",
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ];

//   return (
//     <div>
//       <h2>Let's get Started!!!</h2>
//       <Expense items={expenses} />
//     </div>
//   );
// }

function MyComponent(){
  const [title, setTitle] = useState('클릭 전');
  const clickHandler = () => setTitle('클릭 후')
  return (
    <div>
      <div>{title}</div>
      <button onClick={clickHandler}>버튼</button>
    </div>
  );
}

function App(){
  return <MyComponent />;
}

export default App