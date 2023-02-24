import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
const initialState = {
  email: '',
  token: '',
  loading: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserData(
      state,
      { payload: { token, email } }: PayloadAction<{ email: string; token: string }>,
    ) {
      return { ...state, email, token };
    },
    setUserLoading(state, { payload }: PayloadAction<boolean>) {
      return { ...state, loading: payload };
    },
  },
});
export const {
  name: userSliceName,
  reducer: userSliceReduser,
  actions: UserSliceActions,
} = userSlice;
