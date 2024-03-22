import React from 'react';
import {useState} from "react";
import App from '../App';
function Fruit() {
    const [fruit, setFruit]=useState('Apple');
    const [inputText, setinputText]=useState('');
    
    function updateFruit()
    {
        setFruit(inputText);
    }
    function updateinputText(event)
    {
      const curinputText=event.target.value;
      setinputText(curinputText);
    }
  return (
    <div>
      <h1>Fruit is {inputText}</h1>
      
      <button onClick={() => setFruit('Banana')}>Change</button>
      <button onClick={() => updateFruit('Papaya')}>input</button> 
      <input type='text' onChange={updateinputText}/>
      <button onClick={() => updateFruit()}>Submit</button>
    </div>
  );
}

export default Fruit;
