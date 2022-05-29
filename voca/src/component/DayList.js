import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function DayList() {
  const days = useFetch('http://localhost:3001/days');

  if (days.length === 0) {
    return <span>Loading...</span>
  }

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