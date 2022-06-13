import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(1);
  return (
    <div id="container">
      <h1>Root: {number}</h1>
      <div id="grid">
        <Left1 number={number} />
        <Right1 onIncrease={() => setNumber(number + 1)} />
      </div>
    </div>
  );
}

function Left1({ number }) {
  return (
    <div>
      <h1>Left1 : {number}</h1>
      <Left2 number={number} />
    </div>
  );
}

function Left2({ number }) {
  return (
    <div>
      <h1>Left2 : {number}</h1>
      <Left3 number={number} />
    </div>
  );
}

function Left3({ number }) {
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}

function Right1({ onIncrease }) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 onIncrease={onIncrease} />
    </div>
  );
}

function Right2({ onIncrease }) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 onIncrease={onIncrease} />
    </div>
  );
}

function Right3({ onIncrease }) {
  return (
    <div>
      <h1>Right3</h1>
      <button type="button" onClick={onIncrease}>+</button>
    </div>
  );
}
