import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from "@reduxjs/toolkit";

interface GenericState<T> {
  data?: T;
  status: "loading" | "finished" | "error";
}

interface GenericStateProps<T, J extends SliceCaseReducers<GenericState<T>>> {
  name: string;
  initialState: GenericState<T>;
  reducers: ValidateSliceCaseReducers<GenericState<T>, J>;
}

export const createGenericSlice = <
  T,
  Reducers extends SliceCaseReducers<GenericState<T>>
>({
  name = "",
  initialState,
  reducers,
}: GenericStateProps<T, Reducers>) =>
  createSlice({
    name,
    initialState,
    reducers: {
      start(state) {
        state.status = "loading";
      },
      success(state: GenericState<T>, action: PayloadAction<T>) {
        state.data = action.payload;
        state.status = "finished";
      },
      ...reducers,
    },
  });
