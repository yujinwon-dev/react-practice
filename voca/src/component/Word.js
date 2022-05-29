import { useState } from "react"

export default function Word({ word: propWord }) {
  const [word, setWord] = useState(propWord);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(propWord.isDone);

  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        ...word,
        isDone: !isDone
      }),
    })
      .then(res => {
        console.log(res.ok)
        if (res.ok) {
          setIsDone(prev => !prev);
        }
      });
  }

  function del() {
    if (window.confirm('삭제하시겠습니까?')) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: 'DELETE',
      })
        .then(res => {
          if (res.ok) {
            setWord({ id : 0});
          }
        })
    }
  }

  if (word.id === 0) return null;
  
  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={() => setIsShow(prev => !prev)}>
          {isShow ? '뜻 숨기기' : '뜻 보기'}
        </button>
        <button onClick={del}>삭제</button>
      </td>
    </tr>
  )
};