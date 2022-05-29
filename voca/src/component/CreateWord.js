import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch('http://localhost:3001/days');
  const [isLoading, setIsLoading] = useState(false);

  // useRef : DOM에 접근할 수 있게 해줌 (DOM 요소가 생성된 후 접근 가능)
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    fetch('http://localhost:3001/words/', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    })
      .then(res => {
        if (res.ok) {
          setIsLoading(false);
          alert('단어가 생성되었습니다.');
          navigate(`/day/${dayRef.current.value}`);
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Saving...' : '저장'}
      </button>
    </form>
  );
}