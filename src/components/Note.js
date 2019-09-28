import React, { useContext } from 'react';
import NotesContext from '../context/notes-context'

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext)


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
      <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}>&times;</button>
    </div>
  )
}

export default Note;