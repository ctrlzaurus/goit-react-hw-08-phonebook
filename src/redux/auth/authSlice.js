import { createSlice } from '@reduxjs/toolkit';
import { registerUserOperation, loginUserOperation, currentUserOperation } from './authOperations';

const initialState = {
    isAuth: false,
    token: null,
    user: {
        name: null,
        email: null,
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout() {
            return initialState;
        },
    },
    extraReducers: (builder) => 
        builder
        .addCase(registerUserOperation.fulfilled, ( state, { payload  } ) => {
            return {
                ...payload,
                isAuth: true,
            }
        })
        .addCase(loginUserOperation.fulfilled, ( state, { payload } ) => {
            return {
                ...state,
                ...payload,
                isAuth: true,
            }
        })
        .addCase(currentUserOperation.fulfilled, (state, { payload }) => {
            state.user.name = payload.name;
            state.user.email = payload.email;
            state.isAuth = true;
        })
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;