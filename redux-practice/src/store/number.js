import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
  name: "number",
  initialState: {value: 1},
  reducers: {
    plus: (state) => {
      state.value += 1;
    },
  },
});

export const { plus } = numberSlice.actions;
export default numberSlice.reducer;
