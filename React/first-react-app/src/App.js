// import logo from './logo.svg';

import './App.css';
import Fruit from './Components/Fruit';
import Notes from './Components/Notes';
import Child1 from './Components/Child1';
import Child2 from './Components/Child2';
import { useState } from 'react';
import Assignment2 from './Components/Assignment2/Assignment2';
import Userform from './Forms and hooks/Userform';
import UseEffecthook from './Forms and hooks/UseEffecthook';
import NewsApp from './NewsApp/NewsApp';
function App() {
 const [countInParent,setCountInParent]=useState(0);
 function updateCountInParent(count){
  setCountInParent(count)
 }
    function uploadDataInParent()
    {
      console.log("Data uploaded");
    }
  return (
    <div className="App">
    {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a */}
    {/* //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    {/* //   </header> */}
    {/* // </div> */}

    {/* // <div> */}
      {/* <Fruit /> */}
      {/* <Notes /> */}
      {/* <p>inside the Parent:{countInParent}</p> */}
      {/* <Child1 onCountUpdate={updateCountInParent}/>
      <Child2 countFromParent={countInParent} uploadData={uploadDataInParent}/> */}
      {/* <Assignment2 /> */}


      {/* forms and hooks */}
      {/* <Userform /> */}
      {/* <UseEffecthook /> */}

      <NewsApp />
    </div>

  );
}

export default App;
