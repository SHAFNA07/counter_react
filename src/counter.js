import React, { useState } from 'react';
import './counter.css'
function Counter() {
   const [counter, setCounter] = useState(0);
   const [initialCount, setInitialCount] = useState(0);
   const handleInitialCountChange = (event) => {
      setInitialCount(event.target.value);
   };
   const handleReset = () => {
      setCounter(initialCount);
   };
   return (
      <div className='counter-container '>
         <button className='b1' onClick={() => setCounter(counter + 1)}>Increment</button>
         <button className='b2' onClick={() => setCounter(counter - 1)}>Decrement</button>
         <button onClick={handleReset}>Reset</button>
         <p className='p1' >Count: {counter}</p>
      </div>
   );
}
export default Counter;