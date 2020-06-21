import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [resultShowed, setResultShowed] = useState(false);

  const clear = () => ( setText(''))

  const onButtonPressed = (char) => {
    if(resultShowed) setText('');
    setResultShowed(false)  
    setText((prevState) => `${prevState}${char}`)      
  }

  const calculate = () => {
    setText( () => eval(text))
    setResultShowed(true)
  }
  return (
    <div style={{position: 'fixed',top: '50%',left: '50%',transform: `translate(${-50}%, ${-50}%)`, width:'400px'}}>
          <textarea disabled value = {text} style={{resize:'none', width: '380px', height: '20px', margin: 0, padding: '10px'}}/>
          <button onClick={clear} style={{width:'300px'}}> Clear </button>
          <button value='/' onClick={(e) => onButtonPressed(e.target.value)} style={{width:'100px'}}> / </button>
          <button value='7' onClick={(e) => onButtonPressed(e.target.value)} style={{width:'100px'}}> 7 </button>
          <button value='8' onClick={(e) => onButtonPressed(e.target.value)} style={{width:'100px'}}> 8 </button>
          <button value='9' onClick={(e) => onButtonPressed(e.target.value)} style={{width:'100px'}}> 9 </button>
          <button value='-' onClick={(e) => onButtonPressed(e.target.value)} style={{width:'100px'}}> - </button>
          <button value='4' onClick={(e) => onButtonPressed(e.target.value)} style={{width:'100px'}}> 4 </button>
          <button value='5' onClick={(e) => onButtonPressed(e.target.value)} style={{width:'100px'}}> 5 </button>
          <button value='6' onClick={(e) => onButtonPressed(e.target.value)} style={{width:'100px'}}> 6 </button>
          <button value='+' onClick={(e) => onButtonPressed(e.target.value)} style={{width:'100px'}}> + </button>
          <button value='1' onClick={(e) => onButtonPressed(e.target.value)} style={{width:'100px'}}> 1 </button>
          <button value='2' onClick={(e) => onButtonPressed(e.target.value)} style={{width:'100px'}}> 2 </button>
          <button value='3' onClick={(e) => onButtonPressed(e.target.value)} style={{width:'100px'}}> 3 </button>
          <button value='=' onClick={calculate} style={{width:'100px'}}> = </button>
    </div>
  );
}

export default App;
