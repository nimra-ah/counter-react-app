import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="container">
      <div className="counter-card">
        <h1>Counter</h1>

        <div className="counter">
          <button onClick={decrement} disabled={count === 0}>
            -
          </button>

          <span>{count}</span>

          <button onClick={increment} disabled={count === 10}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
