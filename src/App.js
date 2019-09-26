import React, { useState, useEffect } from 'react';
import './App.css';

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('this should only run once!')
  }, [])

  //similar to componentDidMount and componentDidUpdate
  //second parameter defines, when useEffect() should be fired
  //You can use useEffect many times
  useEffect(() => {
    console.log('useEffect ran');
    document.title = count;
  }, [count])

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <p>The current {text || 'count'} is {count}</p>
      <button onClick={decrement}>-1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <button onClick={increment}>+1</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

App.defaultProps = {
  count: 0,
}

export default App;
