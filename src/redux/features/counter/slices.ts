import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.count += 1;
    },
    decrement: (state: CounterState) => {
      state.count -= 1;
    },
    incrementByNumber: (state: CounterState, { payload }) => {
      state.count += payload;
    },
  },
});

export const { increment, decrement, incrementByNumber } = counterSlice.actions;
export default counterSlice.reducer;
