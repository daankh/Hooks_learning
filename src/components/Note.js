import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';



const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext)


  // useEffect(() => {
  //   console.log('Setting up effect')

  //   //similar to componentDidUnmount:
  //   return () => {
  //     console.log('cleaning up effect')
  //   }
  // }, [])

  //CUSTOM HOOKS (example: mouse position tracking)
  const position = useMousePosition()

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>{position.x}, {position.y}</p>
      <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}>&times;</button>
    </div>
  )
}

export default Note;