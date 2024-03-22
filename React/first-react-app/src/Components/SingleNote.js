import React from 'react'
import Notes from './Notes'
function SingleNote(props) {
  const notestyle={
    padding: '20px',
    border:'2px solid Red',
    borderRadius:'10px',
    backgroundColor:'beige'
  }

  return (
    <div className='singlenote' style={notestyle}>
      <p className='notetext' >{props.note}</p>
    </div>
  )
}

export default SingleNote;
