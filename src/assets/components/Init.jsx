// import { useState } from "react";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <Counter />
//     </>
//   );
// }

// export default App;

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const date = new Date();
//   // date.setDate(date.getDate + count);

//   return (
//     <div className="container">
//       <section>
//         <div className="flex">
//           <button onClick={() => setStep((s) => s - 1)}>-</button>
//           <span>Step: {step}</span>
//           <button onClick={() => setStep((s) => s + 1)}>+</button>
//         </div>

//         <div className="flex">
//           <button onClick={() => setCount((c) => c - step)}>-</button>
//           <span>Count: {count}</span>

//           <button onClick={() => setCount((c) => c + step)}>+</button>
//         </div>
//       </section>

//       <p>
//         <span>
//           {count === 0
//             ? "Today is "
//             : count > 0
//             ? `${count} day(s) from today is `
//             : `${Math.abs(count)} day(s) ago was `}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>
//     </div>
//   );
// }
