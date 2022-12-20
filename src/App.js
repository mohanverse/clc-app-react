import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [result, setResult] = useState("");

  const handleclick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const handleclickclear = () =>{
    let newText = '';
    setResult(newText)
  }
  const handleclickback = () => {
    setResult(result.slice(0, -1))
  }

  const handleclickresult = () =>{
    setResult(eval(result).toString());

  }


  return (
    <>
    <div className="container">
      <h1 className='header'>CALCULATOR</h1>
      <form action="">
        <input type="text" value={result} />
      </form>

      <div className="keypad">
        <button onClick={handleclickclear} id="clear">clear</button>
        <button onClick={handleclickback} id="backspace">c</button>
        <button name='/' onClick={handleclick}>&divide;</button>
        <button name='7' onClick={handleclick}>7</button>
        <button name='8' onClick={handleclick}>8</button>
        <button name='7' onClick={handleclick}>9</button>
        <button name='*' onClick={handleclick}>&times;</button>
        <button name='4' onClick={handleclick}>4</button>
        <button name='5' onClick={handleclick}>5</button>
        <button name='6' onClick={handleclick}>6</button>
        <button name='-' onClick={handleclick}>&ndash;</button>
        <button name='1' onClick={handleclick}>1</button>
        <button name='2' onClick={handleclick}>2</button>
        <button name='3' onClick={handleclick}>3</button>
        <button name='+' onClick={handleclick}>+</button>
        <button name='0' onClick={handleclick}>0</button>
        <button name='.' onClick={handleclick}>.</button>
        <button name='=' onClick={handleclickresult} id="result1" >=</button>
      </div>

     
    </div>
    </>
    
  );
}

export default App;
