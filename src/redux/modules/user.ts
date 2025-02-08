import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    isLoggedIn: boolean;
    userInfo: any;
}

const initialState: UserState = {
    isLoggedIn: false,
    userInfo: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
            state.isLoggedIn = true;
        },
        clearUserInfo: (state) => {
            state.userInfo = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;