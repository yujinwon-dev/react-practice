import './App.css';
import styles from './App.module.css';
import Hello from './component/Hello';
import Name from './component/Name';

function App() {
  return (
    <div className="App">
      <div className={styles.box}>App</div>
      <Hello />
      <Name age={10} />
      <Name age={20} />
      <Name age={30} />
    </div>
  );
}

export default App;
