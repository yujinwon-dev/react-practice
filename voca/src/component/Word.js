import { useState } from "react"

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type="checkbox" checked={isDone} onChange={() => setIsDone(prev => !prev)} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={() => setIsShow(prev => !prev)}>
          {isShow ? '뜻 숨기기' : '뜻 보기'}
        </button>
        <button>삭제</button>
      </td>
    </tr>
  )
};