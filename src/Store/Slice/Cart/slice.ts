import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
const initialState = {
  counter: 0,
};

const cartCounterSlice = createSlice({
  name: 'cartCounterSlice',
  initialState,
  reducers: {
    setIncrementCartCounter(state, { payload: { counter } }: PayloadAction<{ counter: number }>) {
      return { ...state, counter: state.counter + counter };
    },
    setDecrementCartCounter(state, { payload: { counter } }: PayloadAction<{ counter: number }>) {
      return { ...state, counter: state.counter - 1 };
    },
    ClearCartCounter() {
      return { ...initialState };
    },
  },
});
export const {
  name: cartCounterSliceName,
  reducer: cartCounterSliceReduser,
  actions: CartCounterSliceActions,
} = cartCounterSlice;
