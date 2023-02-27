import React, { useState } from 'react';
import * as math from 'mathjs';
import './Calculator.css'

const Calculator = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const handleClearHistory = () => {
    setHistory([]);
  };
  const handleInput = (value) => {
    const lastChar = input.slice(-1);
    if (value === "00" || (lastChar === value && "+-/*".includes(lastChar))) {
      return;
    }

    setInput(input + value);
  }


  const handleCalculate = () => {
    // const result = eval(input);
    const result = math.evaluate(input);
    setHistory([...history, `${input}=${result}`]);
    // setInput('');
    //setInput(result);
    setInput(`${result}`)
  }

  const handleClear = () => {
    setInput('');
  }


  const handleHistoryClick = (index) => {
    const value = history[index];
    const result = value.split('=')[1];
    setInput(result.toString());
    setHistory(history.slice(0, index + 1));
  }

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  }


  return (
    <div className='Calculator'>
      <input type="text" defaultValue={input} readOnly />

      <div>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleInput('/')}>&divide;</button>
        <button onClick={() => handleInput('*')}>&times;</button>
        <button onClick={handleBackspace}>Del</button>
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
            {value.toString()}
          </li>

        ))}
        <button style={{ width: '15rem' }} onClick={handleClearHistory}>Clear History</button>
      </ul>
    </div>
  );
};


export default Calculator