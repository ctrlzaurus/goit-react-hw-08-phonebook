import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = async (user) => {
    const response = await axios.post('/users/signup', user);
    return response.data;
}
export const loginUser = async (user) => {
    const response = await axios.post('/users/login', user);
    return response.data; 
}
export const logoutUser = async () => {
    const response = await axios.post('/users/logout');
    return response.data;
}
export const currentUser = async (token) => {
    const response = await axios.get('/users/current', token);
    return response.data;
}

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const addContact = createAsyncThunk (
    'contacts/addContacts',
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contact);
        return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const deleteContact = createAsyncThunk (
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);