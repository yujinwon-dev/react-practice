import { configureStore } from '@reduxjs/toolkit';
import numberReducer from './number';

export default configureStore({
  reducer: {
    number: numberReducer
  },
});
