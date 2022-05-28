import { Link } from 'react-router-dom';
import dummy from '../db/data.json';

export default function DayList() {

  return (
    <ul>
      {dummy.days.map(day => (
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