import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { registerUser, loginUser, currentUser } from 'redux/contacts/contactsOperations';

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = ``;
    },
};

export const registerUserOperation = createAsyncThunk('auth/register', async (userCreds, {rejectWithValue}) => {
    try {
        const userData = await registerUser(userCreds);
        token.set(userData.token);
        return userData;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const loginUserOperation = createAsyncThunk('auth/login', async (userCreds, {rejectWithValue}) => {
    try {
        const userData = await loginUser(userCreds);
        token.set(userData.token);
        return userData;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const currentUserOperation = createAsyncThunk('auth/current', async (token, {rejectWithValue, getState}) => {
    try {
        const userData = await currentUser(token);
        return userData;
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
// , {
//     condition: (_, {getState}) => {
//         const {token} = getState().auth;
//         token.set(token);
//         return Boolean(token);
//     }
)