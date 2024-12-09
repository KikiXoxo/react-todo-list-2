// INTROUDUCTION
// import { useState } from 'react';
// import { useRef } from 'react';

// const App = () => {
//   const [data, setData] = useState([]);
//   const inputRef = useRef(null);
//   // When using useRef, changing its 'current' value does not trigger a rerender, like how a change with useState triggers one. Because all I want is to get the value and log it to the console, useRef is good for this because it is less complex than useState. However, take for example if I want the input to be rendered in a p tag on the page after the button is clicked, then useState would be used. Anytime you need to affect the UI of your component (ie trigger a rerender to display something new), use useState. Other things useRef is good for are keeping timers, referencing external libraries

//   return (
//     <div>
//       <input ref={inputRef} type='text' />
//       <button
//         onClick={() => {
//           setData([...data, inputRef.current.value]);
//         }} // Note that it is fine using setData in this form and not the functional updater form, because it was passed directly into the onClick event. However if i first called setData in a function (handleAddData) and I then passed this function into onClick, in that case I would have used the functional updater form to call setData within handleAddData
//         type='submit'
//       >
//         Submit
//       </button>

//       {data.map((item, index) => (
//         <h2 key={index}>{item}</h2>
//       ))}
//     </div>
//   );
// };

// export default App;

// TODO LIST APP
import Todo from './components/Todo';

const App = () => {
  return (
    <div>
      <Todo />
    </div>
  );
};

export default App;
