import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="times">
          You read mantra <p>{count}</p> times.
        </div>
        <div className="buttons">
          <button
            className="button"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Add one time
          </button>
          <button className="button" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
