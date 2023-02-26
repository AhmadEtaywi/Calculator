import React, { useState } from 'react';
import './Calculator.css'

const  Calculator = () =>  {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);


  const handleClearHistory = () => {
    setHistory([]);
  };
  const  handleInput = (value) =>{
    setInput(input + value);
  }


  const  handleCalculate = () =>  {
    // eslint-disable-next-line no-eval
    const result = eval(input);
    setHistory([...history,`${input}=${result}`]);
    setInput('');
  }

  const  handleClear = () =>  {
    setInput('');
  }


  const  handleHistoryClick = (index)  => {
    const value = history[index];
    const result = value.split('=')[1];
    setInput(result.toString());
    setHistory(history.slice(0, index + 1));
  }

  const  handleBackspace = () => {
    setInput(input.slice(0, -1));
  }


  return (
    <div>
      <input type="text"  defaultValue={input} />
{/* <p type="text" > {input}</p> */}

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
        <button style={{width:'15rem'}} onClick={handleClearHistory}>Clear History</button>
      </ul>
    </div>
  );
};


export default Calculator