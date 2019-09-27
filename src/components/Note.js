import React from 'react';

const Note = ({ note, removeNote }) => {

  // useEffect(() => {
  //   console.log('Setting up effect')

  //   //similar to componentDidUnmount:
  //   return () => {
  //     console.log('cleaning up effect')
  //   }
  // }, [])

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>&times;</button>
    </div>
  )
}

export default Note;