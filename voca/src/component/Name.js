export default function Name() {
  let name = "MG";

  function changeName() {
    name = name === "MG" ? "YJ" : "MG";
    console.log(name);
    // state가 아니라 단순히 변수이기 때문에 값이 바뀌어도 React는 인지하지 못함 -> 화면이 업데이트 되지 않음
    // 이 경우 vanilla JS로 직접 업데이트 해줘야 함
    // -> useState 사용!
    document.getElementById("name").innerText = name;
  }
  return (
    <>
      <h1>State</h1>
      <h2 id="name">{name}</h2>
      <button onClick={changeName}>Change</button>
    </>
  );
}