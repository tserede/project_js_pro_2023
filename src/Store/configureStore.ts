import { configureStore } from '@reduxjs/toolkit';
// import {userSliceName} from '.Store/Slice/User/slice';
import { userSliceName, userSliceReduser } from './Slice/User/slice';

export const store = configureStore({
  reducer: {
    [userSliceName]: userSliceReduser,
  },
  devTools: true,
});
