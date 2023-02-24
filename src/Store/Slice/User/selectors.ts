import { type RootStateType } from 'Store/configureStore';

export const getUserEmail = (state: RootStateType) => state.userSlice.email;
export const getUserLoading = (state: RootStateType) => state.userSlice.loading;
