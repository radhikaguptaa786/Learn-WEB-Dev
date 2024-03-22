import React, { useState } from 'react'

function Child1(props) {
    const [countInChild1,setCountInChild1]=useState(0);
    function updateCountInChild1(count)
    {
        setCountInChild1(countInChild1+1);
        //call the callback using props
        props.onCountUpdate(countInChild1+2);
    }
  return (
    <div>
      <p>Inside the Child1 : {countInChild1}</p>
      {/* <button onClick={() => setCountInChild1(setCountInChild1+1)}> Increment</button> */}
      <button onClick={updateCountInChild1}> Increment</button>
    </div>
  );
}

export default Child1
