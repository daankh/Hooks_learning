import React, { useState, useEffect, useReducer } from 'react';

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes;
    case 'ADD_NOTE':
      return [
        ...state,
        {
          title: action.title,
          body: action.body
        }
      ];
    case 'REMOVE_NOTE':
      return state.filter(note => note.title !== action.title)
    default:
      return state;
  }
}

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []) // useReducer(reducer, initialState), it returnst state (here: notes) and dispatch
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  //get data from local storage
  //it could be form datatbase
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))

    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes })
    }
  }, [])

  //similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    localStorage.setItem(
      'notes',
      JSON.stringify(notes),
    )
  }, [notes])
  //------------------

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

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title,
    })
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <Note key={note.title} note={note} removeNote={removeNote} />
      ))
      }
      <p>AddNote</p>
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
    </div>
  );
};

const Note = ({ note, removeNote }) => {

  useEffect(() => {
    console.log('Setting up effect')

    //similar to componentDidUnmount:
    return () => {
      console.log('cleaning up effect')
    }
  }, [])

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>&times;</button>
    </div>
  )
}

export default NoteApp;