import {
  CaseReducerActions,
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

export interface CounterActionType {
  increment: (payload: any, type: String) => void;
  decrement: (payload: any, type: String) => void;
  incrementByNumber: (payload: any, type: String) => void;
}

export type CounterActionsType =
  | "increment"
  | "decrement"
  | "incrementByNumber";
type CounterSliceNameType = "counter";

const initialState: CounterState = {
  count: 0,
};

export const counterSlice: Slice<
  CounterState,
  SliceCaseReducers<CounterState>,
  CounterSliceNameType
> = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState): void => {
      state.count += 1;
    },
    decrement: (state: CounterState): void => {
      state.count -= 1;
    },
    incrementByNumber: (
      state: CounterState,
      { payload }: PayloadAction<number>
    ): void => {
      if (payload > 0) {
        state.count += payload;
      }
    },
  },
});

export const {
  increment,
  decrement,
  incrementByNumber,
}: CaseReducerActions<SliceCaseReducers<CounterState>> = counterSlice.actions;

export default counterSlice.reducer;
