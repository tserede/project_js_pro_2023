import { configureStore } from '@reduxjs/toolkit';
import { userSliceName, userSliceReduser } from './Slice/User/slice';

export const store = configureStore({
  reducer: {
    [userSliceName]: userSliceReduser,
  },
  devTools: true,
});
export type RootStateType = ReturnType<typeof store.getState>;
