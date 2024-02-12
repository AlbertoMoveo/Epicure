import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchData } from './searchThunk';
import { IChef, IDish, IRestaurant } from '../../Interfaces/Interfaces';

interface SearchSliceState { 
  searchResults: {
    restaurants: IRestaurant[];
    chefs: IChef[];
    dishes: IDish[];
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: SearchSliceState = {
  searchResults: {
    restaurants: [],
    chefs: [],
    dishes: []
  },
  status: 'idle',
  error: null
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSearchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResults = action.payload;
        state.error = null;
      })
      .addCase(fetchSearchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong.';
      });
  },
});

export default searchSlice.reducer;
