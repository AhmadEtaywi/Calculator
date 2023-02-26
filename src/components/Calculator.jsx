import React, { useState } from 'react';
import './Calculator.css'

const  Calculator = () =>  {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);



  const  handleInput = (value) =>{
    setInput(input + value);
  }


  const  handleCalculate = () =>  {
    // eslint-disable-next-line no-eval
    const result = eval(input);
    setHistory([...history, result]);
    setInput('');
  }

  const  handleClear = () =>  {
    setInput('');
  }


  const  handleHistoryClick = (index)  => {
    const value = history[index];
    setInput(value.toString());
    setHistory(history.slice(0, index + 1));
  }

  const  handleBackspace = () => {
    setInput(input.slice(0, -1));
  }



  return (
    <div>
      <input type="text" value={input} />

      <div>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleInput('/')}>/</button>
        <button onClick={() => handleInput('*')}>X</button>
        <button onClick={handleBackspace}>AC</button>
      </div>

      <div>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('-')}>-</button>
      </div>

      <div>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('+')}>+</button>
      </div>

      <div>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('.')}>.</button>
      </div>

      <div>
        <button onClick={() => handleInput('%')}>%</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button style={{ width: '6.8rem' }} onClick={handleCalculate}>=</button>
      </div>

      <ul>
        {history.map((value, index) => (
          <li key={index} onClick={() => handleHistoryClick(index)}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Calculator