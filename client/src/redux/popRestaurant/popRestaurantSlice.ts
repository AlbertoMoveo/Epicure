import { createSlice } from '@reduxjs/toolkit';
import { fetchRestaurantData, fetchRestaurantDataByRating } from './popRestuarantThunk';
import { IRestaurant } from '../../Interfaces/Interfaces';

interface restaurantSliceState { 
  currentIndex: number;
  currentRestaurant: IRestaurant| null;
  currentRestaurantData: IRestaurant[];
  status: string;
  error: null;}

const initialState :restaurantSliceState= {
  currentIndex: 0,
  currentRestaurant: null,
  currentRestaurantData: [],
  status: 'idle',
  error: null,
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    swapRestaurantData: (state) => {
      const nextIndex = (state.currentIndex + 1) % (state.currentRestaurantData.length || 1);
      state.currentIndex = nextIndex;
      state.currentRestaurant = state.currentRestaurantData[nextIndex];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRestaurantData.fulfilled, (state, action) => {
        console.log(action.payload);
        
        state.status = 'succeeded';
        state.currentRestaurantData = action.payload;
        state.currentRestaurant = action.payload[state.currentIndex];
      })
      .addCase(fetchRestaurantData.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(fetchRestaurantDataByRating.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRestaurantDataByRating.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentRestaurantData = action.payload;
        state.currentRestaurant = action.payload[state.currentIndex];
      })
      .addCase(fetchRestaurantDataByRating.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const { swapRestaurantData } = restaurantSlice.actions;
export { fetchRestaurantData, fetchRestaurantDataByRating }; 
export default restaurantSlice.reducer;
