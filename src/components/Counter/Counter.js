import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);

  const addToCounter = () => {
    setCounter(counter + input);
  };

  const subtractFromCounter = () => {
    setCounter(counter - input);
  };
  return (
    <div>
      <h3 data-testid='header'>My Counter</h3>
      <h2 data-testid='counter'>{counter}</h2>
      <button data-testid='subtract-btn' onClick={subtractFromCounter}>
        -
      </button>
      <input
        type='number'
        data-testid='input'
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
        className='text-center'
      />
      <button data-testid='add-btn' onClick={addToCounter}>
        +
      </button>
    </div>
  );
};

export default Counter;
