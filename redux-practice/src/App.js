import { configureStore } from '@reduxjs/toolkit'
import { Provider, useSelector, useDispatch, connect } from 'react-redux';

function reducer(currentState, action) {
  if (currentState === undefined) {
    return { number: 1};
  }
  const newState = {...currentState}; // 복제본을 이용해서 불변성 유지
  // useDispatch에서 작성한 type을 여기서 사용
  if (action.type === 'PLUS') {
    newState.number++;
  }
  return newState;
}
const store = configureStore({ reducer });

export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div>
      <h1>Left1</h1>
      <Left2/>
    </div>
  );
}

function Left2() {
  console.log('Left2');
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
}

function Left3() {
  console.log('Left3');
  const number = useSelector(state => state.number);
  return (
    <div>
      <h1>Left3: {number}</h1>
    </div>
  );
}

function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
}

function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  );
}

function Right3() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <button type="button" onClick={() => dispatch({ type: 'PLUS' })}>+</button>
    </div>
  );
}
