import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [name,setName]=useState('');
    const navigate=useNavigate();
    function handleSubmit(e) {
        e.preventDefault();

        if(name==='Radhika'){
            navigate('/user/Radhika')
        }else{
            navigate('/about')
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
             <input type='text' onChange={(e) => setName(e.target.value)}></input>   
        </form>
     
    </div>
  )
}

export default Login
