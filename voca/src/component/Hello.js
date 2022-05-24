import styles from './Hello.module.css';

export default function Hello() {

  function showName() {
    console.log('yj');
  }
  
  function showAge(age) {
    console.log(age);
  }

  function showText(text) {
    console.log(text);
  }

  return (
    <div>
      <div className={styles.box}>Hello</div>
      {/* onClick={showName()} => 함수가 반환하는 값이 들어감 */}
      <button type="button" onClick={showName}>Show name</button>
      <button type="button" onClick={() => showAge(25)}>Show age</button>
      <input type="text" onChange={e => {
        const text = e.target.value;
        showText(text);
      }} />
    </div>
  );
}
