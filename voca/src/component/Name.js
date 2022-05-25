import { useState } from "react";

export default function Name({ age }) {
  // let name = "MG";
  const [name, setName] = useState("MG");

  function changeName() {
    setName(name === "MG" ? "YJ" : "MG");
  }
  
  return (
    <>
      <h1>State</h1>
      <h2 id="name">{name}({age}세)</h2>
      <button onClick={changeName}>Change</button>
    </>
  );
}