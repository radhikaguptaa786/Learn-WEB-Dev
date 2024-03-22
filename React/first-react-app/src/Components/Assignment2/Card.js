import React ,{useState} from 'react'

function Card({textline}) {

    const stylecard={
        backgroundColor: textline ? "yellow" : "teal",
        height:'200px',
        borderRadius:'10px',
        padding:'10px',
     
        // width:'300px'
    }
    
  return (
    <div style={stylecard}>
        <p style={{fontSize:'0.7rem'}}>{textline}</p>
    </div>
  )
}

export default Card
