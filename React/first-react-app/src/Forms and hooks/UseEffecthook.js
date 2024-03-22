import React ,{useState,useEffect} from 'react'

function UseEffecthook() {

    const [counter,setCounter]=useState(0);
    const[name,setName]=useState('');
    //when name or counter changes
    // useEffect(() =>{
    //     console.log("counter updated");
    // },[counter,name])

    useEffect(() =>{
        console.log("first time mounted");
    },[])
    useEffect(() =>{
        console.log("name updated");
    },[name])
    useEffect(() =>{
        console.log("counter updated");
    },[counter])
    useEffect(() =>{
        console.log("re-rendering happened");
    })
  return (
    <div>
      <p>{counter}</p>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCounter(counter+1)}>Increment</button>
    </div>
  )
}

export default UseEffecthook;
