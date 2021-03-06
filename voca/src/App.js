import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* Routes 바깥에 있는 컴포넌트는 모든 페이지에서 보여짐 */}
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
