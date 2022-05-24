import './App.css';
import styles from './App.module.css';
import Hello from './component/Hello';
import Name from './component/Name';

function App() {
  return (
    <div className="App">
      <div className={styles.box}>App</div>
      <Hello />
      <Name />
    </div>
  );
}

export default App;
