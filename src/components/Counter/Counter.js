import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);
  return (
    <div>
      <h3 data-testid='header'>My Counter</h3>
      <h2 data-testid='counter'>{counter}</h2>
      <button data-testid='subtract-btn'>-</button>
      <input
        type='number'
        data-testid='input'
        value={input}
        className='text-center'
      />
      <button data-testid='add-btn'>+</button>
    </div>
  );
};

export default Counter;
