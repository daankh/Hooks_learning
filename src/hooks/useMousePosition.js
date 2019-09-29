import { useState, useEffect } from 'react';

//CUSTOM HOOKS (example: mouse position tracking)
const useMousePosition = () => {
  //Setup state to track x and y position (useState)
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    //Setup event to listen for mouse movement
    const handleMouseMove = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY,
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    //Remove event listener if unmounted (useEffect)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return position;
}

export default useMousePosition;