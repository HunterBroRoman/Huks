import React from "react";
import { useState, useEffect } from "react";

export const App = () => {

  const [type, setType] = useState('user');
//   const [data, setData] = useState([]);
  const [pos, setPos] = useState( {
    x: 0, y: 0
  })

  // useEffect (() => {
  //   fetch('https://jsonplaceholder.typicode.com/${type}')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  // }, [type])

  const mouseMoveHandler = event => {
    setPos ({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect (() => {
    window.addEventListener('mousemove', mouseMoveHandler)
  })



  return (  
    <div>
      <h1>Ресурс:{type}</h1>
      <button onClick={() => setType('user')}>Пользователи</button>
      <button onClick={() => setType('todos')}>TODOS</button>
      <button onClick={() => setType('posts')}>Posts</button>
    
    <pre>{JSON.stringify(pos, null, 2)}</pre>
    
    </div>
  
  );
};
