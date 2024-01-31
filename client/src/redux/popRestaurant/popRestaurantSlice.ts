import { createSlice } from '@reduxjs/toolkit';
import { fetchRestaurantData } from './popRestuarantThunk';
const initialState = {
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
      });
  },
});

export const { swapRestaurantData } = restaurantSlice.actions;
export { fetchRestaurantData }; 
export default restaurantSlice.reducer;
