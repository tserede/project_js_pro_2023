import { configureStore } from '@reduxjs/toolkit';
import { cartCounterSliceName, cartCounterSliceReduser } from './Slice/Cart/slice';
import { userSliceName, userSliceReduser } from './Slice/User/slice';

export const store = configureStore({
  reducer: {
    [userSliceName]: userSliceReduser,
    [cartCounterSliceName]: cartCounterSliceReduser,
  },
  devTools: true,
});
export type RootStateType = ReturnType<typeof store.getState>;
