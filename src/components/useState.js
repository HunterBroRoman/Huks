import React from "react";
import { useState } from "react";

export const App = () => {
const [counter, setCounter] = useState(0);

function increment() {
  // setCounter(counter + 1);
  setCounter((prev) => {
    return prev + 1;
  })
}

function decrement() {
  setCounter(counter - 1);
}

return (
  <div>
    <h1>Счетчик: {counter}</h1>
    <button onClick={increment} className="btn btn-success">Добавить</button>
    
    <button onClick={decrement} className="btn btn-danger">Уменьшить</button>

  </div>
);
}

