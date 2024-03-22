import React, { useState } from 'react'
import SingleNote from './SingleNote';

function Notes() {
    const [notes,setNotes]=useState([]); //array
    const [curNote,setCurNote]=useState('');

    function updateCurNote(event)
    {
        setCurNote(event.target.value)
    }
    function addNote(){
        const newNotesArray=[...notes,curNote];
        setNotes(newNotesArray)
    }
    const styleNoteText={
        listStyle:'none',
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gap:'2'
      }
  return (
    <div>
      <input onChange={updateCurNote} type='text' />
      <button onClick={addNote}>Submit</button>
      <ul style={styleNoteText}>
        {
            notes.map((note,index) =>{
                return (
                    // <li key={index}>{note}</li>
                    <li key={index}>
                        <SingleNote note={note} />
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Notes
