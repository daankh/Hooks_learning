import React, { useState, useEffect } from 'react';

const NoteApp = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  //get data from local storage
  //it could be form datatbase
  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'))

    if (notesData) {
      setNotes(notesData);
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
    setNotes([
      ...notes,
      {
        title,
        body,
      }
    ]);

    setTitle('');
    setBody('');
  };

  const removeNote = (title) => {
    const newNotes = notes.filter(note => note.title !== title)
    setNotes([...newNotes])
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>&times;</button>
        </div>
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

export default NoteApp;