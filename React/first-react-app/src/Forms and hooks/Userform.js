import { useRef, useState } from "react";
import React from "react";

function Userform(){
    const [name,setName]=useState('');
    const nameref=useRef(null);
    const fruitref=useRef(null);
    function handleSubmit(event){
        event.preventDefault();   //to prevent default behaviour of form (reloading)
        const nameInputValue=nameref.current.value;
        const selectedfruit=fruitref.current.value;
        alert(nameInputValue+selectedfruit);
    }
 
    function handleChange(event){
        console.log(event.target.value);
    }
    return(
        <form>
            <label htmlFor="name">Name</label>
            {/* <input type="text" onChange={(event) => {
                setName(event.target.value);
            }} /> */}
            <input type="text" id="nameinput" ref={nameref}/>
            <select onChange={handleChange}>
                <option value={"grape"}>Grapes</option>
                <option value={"Orange"}>Orange</option>
                <option value={"Banana"}>Banana</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Userform