import React from 'react';
import './Note.css'

function Note(props){

    const deleteNote = () =>{
        props.deleteItem(props.id);
    }

    return(
        <>
            <div className='note'>
                <p className='note_title'>{props.title} : </p>
                <p className='note_content'>{props.content}</p>
                <button className='deleteNote' onClick={deleteNote}> 🗑️ </button>
            </div>
        </>
    )
}

export default Note;