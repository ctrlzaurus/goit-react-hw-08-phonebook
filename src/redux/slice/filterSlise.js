import { createSlice } from '@reduxjs/toolkit';

const initialFiltersState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFiltersState,
  reducers: {
    performFilter(state, action) {
      return action.payload;
    },
  },
});

export const { performFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;