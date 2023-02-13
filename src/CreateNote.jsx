import React, { useState } from 'react';
import './CreateNote.css';

function CreateNote(props) {

    const [Expand , setExpand] = useState(false)

    const [note , setNote] = useState({
        title :'' , 
        content:'',
    })

    const InputEvent  = (event)=>{

        const {name , value} = event.target;

        setNote((oldData)=>{
            return{
                ...oldData ,
                [name] : value ,

            }
        });
        console.log(note)
    }

    const addEvent = ()=>{

        if(note.title!=='' && note.content!=='')
        {
            props.passNote(note);

            setNote({
                title:"",
                content:''
            })
        }
    }

    const expandIt = ()=>{
        setExpand(true)
    }

    const shrinkIt = ()=>{
        setExpand(false)
    }

  return (
    <>
        <div className='input_container'>
            <div className='main_note'>
               {Expand &&  <input className='note_Title' type='text' placeholder='Title' autoComplete='off' name='title' value={note.title} onChange={InputEvent}/>}
                <textarea className='note_textarea' rows='4'  placeholder='Write a note...' name='content' value={note.content} onChange={InputEvent} onClick={expandIt} onDoubleClick={shrinkIt}>
                </textarea>
               { Expand && <button className='create_note' onClick={addEvent} >
                    +
                </button>}
            </div>
        </div> 
    </>
  );
}

export default CreateNote;
