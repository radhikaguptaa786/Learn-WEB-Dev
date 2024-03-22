import React from 'react'
import Card from './Card'

function Assignment2() {
    const stylemain={
        // display:'grid',
        // gridTemplateColumns:'repeat(3,1fr)',
        padding:'20px 100px 0 100px',
        margin:'50px 50px 50px 50px',
        backgroundColor:'beige'
    }
    const styleCard={
      display:'grid',
      gridTemplateColumns:'auto auto auto',
      // justifyContent:'space-between',
      gap:'20px',
      padding:'5px 0 20px 0'
    }
  const searchForm={
      display: 'flex',
      borderRadius:'20px',
      backgroundColor:'lightgrey'
  }

  return (
    <div style={stylemain}>
        <h2>Notes</h2>
       <div style={searchForm}>
       <i className="fa-solid fa-magnifying-glass">
        </i><input type='text' placeholder='type to search' style={{backgroundColor:'lightgray',border:'none',width:'100%'}}/>
       </div>
      <div style={styleCard}>
      <Card textline={"This is my First Node"}/>
      <Card textline={"Pick up the grocerries"}/>
      <Card textline={"new node"} />
      <Card textline={""} />
      </div>
      
    </div>
  )
}

export default Assignment2
