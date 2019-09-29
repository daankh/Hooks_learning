import React, { Fragment, useState, useContext } from 'react';
import NotesContext from "../context/notes-context";
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const position = useMousePosition()

  const addNote = (e) => {
    e.preventDefault();

    dispatch({
      type: 'ADD_NOTE',
      title,
      body,
    })

    setTitle('');
    setBody('');
  };

  return (
    <Fragment>
      <p>AddNote - {position.x} - {position.y}</p>
      <form onSubmit={addNote}>
        <input placeholder='Your note title...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea placeholder='Your note description...'
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <button> add note</button>
      </form>
    </Fragment>
  )
}

export default AddNoteForm;