import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function DayList() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/days')
      .then(res => res.json())
      .then(data => setDays(data));
  }, []);

  return (
    <ul>
      {days.map(day => (
        <li key={day.id}>
          {/* Link는 a 태그로 렌더링됨 */}
          <Link to={`/day/${day.day}`}>
            Day {day.day}
          </Link>
          </li>
      ))}
    </ul>
  );
}